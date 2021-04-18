export const useConfirm = (message = "", confirmCallback, cancelCallback) => {
    if (typeof confirmCallback !== "function") {
      return;
    }
    const confirmAction = () => {
      if (window.confirm(message)) {
        confirmCallback();
      } else {
        try {
          cancelCallback();
        } catch (error) {
          return;
        }
      }
    };
    return confirmAction;
  };