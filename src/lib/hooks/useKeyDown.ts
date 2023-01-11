import { useEffect } from 'react';

const useKeyDown = (key: string, callback: () => void) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === key) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
};

export default useKeyDown;
