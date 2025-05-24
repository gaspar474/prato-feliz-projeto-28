
import { useEffect, useRef, useState } from 'react';

interface UseOptimizedIntersectionObserverProps {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useOptimizedIntersectionObserver = ({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '50px'
}: UseOptimizedIntersectionObserverProps = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use requestIdleCallback when available for better performance
    const scheduleCallback = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback);
      } else {
        setTimeout(callback, 0);
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      scheduleCallback(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (triggerOnce && observerRef.current) {
              observerRef.current.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsIntersecting(false);
          }
        });
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { elementRef, isIntersecting };
};
