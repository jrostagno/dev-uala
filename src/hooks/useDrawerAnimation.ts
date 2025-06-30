import { useEffect, useState } from "react";

export const useDrawerAnimation = (onClose: () => void, duration = 300) => {
  const [closing, setClosing] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setHasEntered(true));
  }, []);

  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [closing, onClose, duration]);

  const handleClose = () => setClosing(true);

  return { closing, hasEntered, handleClose };
};
