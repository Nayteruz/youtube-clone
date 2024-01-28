import { useEffect, useState } from "react";

export const useClickOutside = (id: string) => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (!click) {
      return;
    }

    const closeOutside = ({ target }: MouseEvent) => {
      const element = target as HTMLDivElement;
      if (!element.closest(id)) {
        setClick(false);
      }
    };

    window.addEventListener("click", closeOutside);

    return () => {
      window.removeEventListener("click", closeOutside);
    };
  }, [id, click]);

  return {
    click,
    setClick,
  };
};
