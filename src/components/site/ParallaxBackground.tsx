import { useEffect, useRef, useState } from "react";

type Star = { x: number; y: number; r: number; a: number; tw: number; depth: number };
type Shooting = { x: number; y: number; vx: number; vy: number; life: number; len: number };

/** Fixed decorative layers: subtle starfield reacting to pointer + occasional shooting stars. */
export function ParallaxBackground() {
  const [y, setY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let stars: Star[] = [];
    const shooting: Shooting[] = [];
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let raf = 0;
    let t = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(220, Math.round((w * h) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.35,
        a: Math.random() * 0.5 + 0.2,
        tw: Math.random() * 0.02 + 0.004,
        depth: Math.random() * 0.7 + 0.3,
      }));
    };

    const onPointer = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const spawnShooting = () => {
      const fromLeft = Math.random() > 0.35;
      const speed = 6 + Math.random() * 5;
      shooting.push({
        x: fromLeft ? -60 : w + 60,
        y: Math.random() * h * 0.6,
        vx: fromLeft ? speed : -speed,
        vy: speed * (0.35 + Math.random() * 0.25),
        life: 1,
        len: 90 + Math.random() * 90,
      });
    };

    const draw = () => {
      t += 1;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const twinkle = s.a + Math.sin(t * s.tw * 8) * 0.18;
        const px = s.x - pointer.x * 14 * s.depth;
        const py = s.y - pointer.y * 14 * s.depth;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 240, 235, ${Math.max(0.05, Math.min(0.75, twinkle))})`;
        ctx.fill();
      }

      for (let i = shooting.length - 1; i >= 0; i--) {
        const sh = shooting[i]!;
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life -= 0.008;
        const nx = sh.x - sh.vx * (sh.len / 10);
        const ny = sh.y - sh.vy * (sh.len / 10);
        const grad = ctx.createLinearGradient(sh.x, sh.y, nx, ny);
        grad.addColorStop(0, `rgba(190, 240, 220, ${Math.max(0, sh.life) * 0.85})`);
        grad.addColorStop(1, "rgba(190, 240, 220, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();
        if (sh.life <= 0 || sh.x < -200 || sh.x > w + 200 || sh.y > h + 200) shooting.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    raf = requestAnimationFrame(draw);
    const interval = window.setInterval(
      () => {
        if (!document.hidden && Math.random() > 0.35) spawnShooting();
      },
      4000,
    );

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(interval);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
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
