const [isReady, setIsReady] = useState(false);

useEffect(() => {
  setIsReady(true);
}, []);

return (
  <div className={`gmc-transition-opacity ${isReady ? 'gmc-opacity-100' : 'gmc-opacity-0'}`}>
     {/* Your wonderful chat dialog */}
  </div>
);
