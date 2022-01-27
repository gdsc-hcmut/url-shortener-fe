import { useLayoutEffect, useState } from 'react';

export default function useWindowSize() {
  const [screen, setScreen] = useState([0, 0, '']);
  useLayoutEffect(() => {
    function updateScreen() {
      setScreen([window.innerWidth, window.innerHeight]);
      if (window.innerWidth >= 1536) {
        setScreen([window.innerWidth, window.innerHeight, '2xl']);
      } else if (window.innderWidth >= 1280) {
        setScreen([window.innerWidth, window.innerHeight, 'xl']);
      } else if (window.innderWidth >= 1024) {
        setScreen([window.innerWidth, window.innerHeight, 'lg']);
      } else if (window.innderWidth >= 768) {
        setScreen([window.innerWidth, window.innerHeight, 'md']);
      } else if (window.innderWidth >= 640) {
        setScreen([window.innerWidth, window.innerHeight, 'sm']);
      } else {
        setScreen([window.innerWidth, window.innerHeight, '']);
      }
    }
    window.addEventListener('resize', updateScreen);
    updateScreen();
    return () => window.removeEventListener('resize', updateScreen);
  }, []);
  return screen;
}
