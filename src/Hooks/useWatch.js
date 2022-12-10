import { useEffect, useRef } from 'react';

export const useWatch = (fn, deps) => {
  const mounted = useRef(false);
  let isMounted;

  if (mounted.current) {
    isMounted = true;
  } else {
    mounted.current = true;
    isMounted = false;
  }

  useEffect(() => {
    if (!isMounted) return;

    fn();
  }, deps);
};
