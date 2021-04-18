const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.textContent = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };