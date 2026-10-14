#!/usr/bin/env bash
# Cut a release of @converzen/chat-widget.
#
# dist/ is not tracked on any branch (see .gitignore). Consumers install this
# package as a git dependency pinned to a tag (github:converzen/chat-widget#vX.Y.Z),
# so the tag has to contain a built dist/. This script:
#
#   1. bumps package.json/package-lock.json and commits "release vX.Y.Z" on the
#      release branch (no dist/ in that commit),
#   2. builds + smoke-tests,
#   3. commits dist/ on a detached HEAD on top of that and tags it vX.Y.Z.
#
# The tagged commit sits on no branch, so dist/ never reaches a branch and
# never causes merge conflicts.
#
# Usage: scripts/release.sh <X.Y.Z|patch|minor|major> [--push]
#   RELEASE_BRANCH=main (default) - branch the release commit goes on
set -euo pipefail

usage() { echo "usage: $0 <X.Y.Z|patch|minor|major> [--push]" >&2; exit 2; }

[ $# -ge 1 ] || usage
BUMP="$1"
PUSH=false
[ "${2:-}" = "--push" ] && PUSH=true
[ $# -le 2 ] || usage

RELEASE_BRANCH="${RELEASE_BRANCH:-main}"

cd "$(git rev-parse --show-toplevel)"

branch="$(git symbolic-ref --short -q HEAD || true)"
if [ "$branch" != "$RELEASE_BRANCH" ]; then
    echo "error: on '${branch:-detached HEAD}', releases are cut from '$RELEASE_BRANCH'" >&2
    exit 1
fi
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
    echo "error: working tree has uncommitted changes" >&2
    exit 1
fi
if git ls-files --error-unmatch dist >/dev/null 2>&1; then
    echo "error: dist/ is tracked on $RELEASE_BRANCH - it must only live in release tags" >&2
    exit 1
fi

# 1. Version bump commit on the release branch
npm version "$BUMP" --no-git-tag-version >/dev/null
VERSION="$(node -p 'require("./package.json").version')"
TAG="v$VERSION"
if git rev-parse -q --verify "refs/tags/$TAG" >/dev/null; then
    git checkout -- package.json package-lock.json
    echo "error: tag $TAG already exists" >&2
    exit 1
fi
git add package.json package-lock.json
git commit -q -m "release $TAG"
echo ">>> committed 'release $TAG' on $RELEASE_BRANCH"

# 2. Clean build + smoke test
rm -rf dist
npm ci
npm run build
npm run smoke

# The build regenerates tracked files (src/styles/output.css). If they changed,
# the tag would hold sources that don't match its build - stop instead.
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
    echo "error: build changed tracked files:" >&2
    git status --short --untracked-files=no >&2
    echo "Commit them on $RELEASE_BRANCH (e.g. 'git reset --soft HEAD~1', add, recommit) and rerun." >&2
    exit 1
fi

# 3. Commit dist/ on a detached HEAD and tag it
git switch -q --detach
git add -f dist
git commit -q -m "$TAG (built dist)"
git tag -a "$TAG" -m "$TAG"
git switch -q "$RELEASE_BRANCH"
echo ">>> tagged $TAG ($(git rev-parse --short "$TAG")), $(git ls-tree -r --name-only "$TAG" dist | wc -l) dist files"

if $PUSH; then
    git push origin "$RELEASE_BRANCH" "$TAG"
else
    echo ">>> not pushed. Publish with:"
    echo "    git push origin $RELEASE_BRANCH $TAG"
fi
echo ">>> consumers: \"@converzen/chat-widget\": \"github:converzen/chat-widget#$TAG\""
