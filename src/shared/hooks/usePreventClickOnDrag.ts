import { useCallback, useState } from 'react';

interface Params<T> {
  fn: (e?: React.MouseEvent<T, MouseEvent>) => void;
}

export const usePreventClickOnDrag = <T extends HTMLElement>({
  fn,
}: Params<T>) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMouseDown: React.MouseEventHandler<T> = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove: React.MouseEventHandler<T> = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleClick: React.MouseEventHandler<T> = (e) => {
    if (isDragging) return;
    fn(e);
  };

  return {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onClick: handleClick,
  };
};
