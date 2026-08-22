import { useEffect, useState } from "react";

/** Fixed decorative layers that drift at different speeds while scrolling. */
export function ParallaxBackground() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div
        className="absolute left-[-10%] top-[10%] size-[30rem] rounded-full bg-emerald-accent/10 blur-[110px]"
        style={{ transform: `translate3d(0, ${y * 0.12}px, 0)` }}
      />
      <div
        className="absolute right-[-12%] top-[45%] size-[34rem] rounded-full bg-blue-accent/10 blur-[120px]"
        style={{ transform: `translate3d(0, ${y * -0.08}px, 0)` }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] size-[26rem] rounded-full bg-emerald-accent/8 blur-[100px]"
        style={{ transform: `translate3d(0, ${y * 0.05}px, 0)` }}
      />
    </div>
  );
}
