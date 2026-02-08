// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Most modern browsers respect this very well
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Fallback: force instant scroll in case of very long pages or mobile issues
    // (uncomment if you notice problems on some devices)
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 0);

  }, [pathname]);

  return null;
}

export default ScrollToTop;