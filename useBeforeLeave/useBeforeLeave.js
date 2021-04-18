export const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
      if (event.clientY <= 0) onBefore();
    };
    useEffect(() => {
      if (typeof onBefore !== "function") return;
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };