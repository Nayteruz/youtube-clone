import { useEffect, useRef, useState } from "react";

interface IAnimateProps {
  delay: number;
  state: boolean;
}

export const useAnimate = ({ delay, state }: IAnimateProps) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(state);
  const timeoutRef = useRef<number | null>(null);

  const clearAnimationTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const setAnimation = (animate: boolean) => {
    clearAnimationTimeout();

    timeoutRef.current = setTimeout(() => {
      setIsAnimated(animate);
    }, delay);
  };

  useEffect(() => {
    setAnimation(state);

    return () => {
      clearAnimationTimeout();
    };
  }, [state]);

  return {
    isAnimating: state,
    isAnimated,
    isAnimate: state || isAnimated,
  };
};
