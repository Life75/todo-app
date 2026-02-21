import { useEffect, useRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";

export function usePerfectScrollbar<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const psRef = useRef<PerfectScrollbar | null>(null);

  useEffect(() => {
    if (containerRef.current && !psRef.current) {
      psRef.current = new PerfectScrollbar(containerRef.current, {
        suppressScrollX: true,
      });
    }

    return () => {
      if (psRef.current) {
        psRef.current.destroy();
        psRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const update = () => psRef.current?.update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return containerRef;
}
