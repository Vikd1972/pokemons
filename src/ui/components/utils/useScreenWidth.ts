import { useEffect, useState } from 'react';

export const useScreenWidth = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const onChangeWidth = () => {
      setWidthScreen(window.innerWidth);
    };
    window.addEventListener('resize', onChangeWidth);
    return () => window.removeEventListener('resize', onChangeWidth);
  }, []);

  return widthScreen;
};

export default useScreenWidth;
