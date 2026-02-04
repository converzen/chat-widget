// Tells TypeScript that importing a .css file returns a raw string
declare module '*.css' {
  const content: string;
  export default content;
}

// If you plan to use images or SVGs later, add these too:
declare module '*.svg' {
  const content: any;
  export default content;
}
