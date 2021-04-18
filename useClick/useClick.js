export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      const refElement = element;
      if (refElement.current && typeof onClick === "function") {
        refElement.current.addEventListener("click", onClick);
      }
      return () => {
        if (refElement.current && typeof onClick === "function") {
          refElement.current.removeEventListener("click", onClick);
        }
      };
    }, [onClick]);
    return element;
  };