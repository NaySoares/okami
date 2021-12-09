import { useState, useEffect, useCallback } from "react";

const useIndicatorScroll = () => {
  const [progressBar, setProgressBar] = useState(0);

  const handleOnScroll = useCallback(() => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setProgressBar(scrolled);
  }, [setProgressBar]);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => window.removeEventListener("scroll", handleOnScroll);
  });
  return progressBar;
};

export default useIndicatorScroll;
