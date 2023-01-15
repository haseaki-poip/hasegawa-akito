import { useEffect, useState } from "react";
// スクロール量を取得

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const PositionUp = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", PositionUp);
    PositionUp();

    return () => window.removeEventListener("scroll", PositionUp);
  }, []);

  return scrollPosition;
};

export default useScroll;
