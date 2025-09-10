import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Lightweight interactive image with mouse wheel zoom and drag-to-pan
function InteractiveZoomPanImage({
  src,
  alt,
  minScale = 1,
  maxScale = 4,
  initialScale = 1,
}: {
  src: string;
  alt?: string;
  minScale?: number;
  maxScale?: number;
  initialScale?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [scale, setScale] = useState(initialScale);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastPos, setLastPos] = useState<{ x: number; y: number } | null>(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Observe container size for responsive clamping
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setContainerSize({ width: el.clientWidth, height: el.clientHeight });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Read natural image size
  const onImgLoad = () => {
    if (imgRef.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      setImgSize({ width: naturalWidth, height: naturalHeight });
    }
  };

  const clampTranslate = useMemo(() => {
    return (tx: number, ty: number, s: number) => {
      const cw = containerSize.width;
      const ch = containerSize.height;
      const iw = imgSize.width * s;
      const ih = imgSize.height * s;

      // If sizes not ready, return as is
      if (!cw || !ch || !iw || !ih) return { x: tx, y: ty };

      // Center if image smaller than container on an axis
      const clampAxis = (t: number, c: number, i: number) => {
        if (i <= c) {
          return (c - i) / 2; // center
        }
        // Constrain so image always covers container
        const minT = c - i;
        const maxT = 0;
        return Math.min(maxT, Math.max(minT, t));
      };

      return {
        x: clampAxis(tx, cw, iw),
        y: clampAxis(ty, ch, ih),
      };
    };
  }, [containerSize, imgSize]);

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    // Enable smooth zoom with mouse wheel; keep point under cursor fixed
    e.preventDefault();
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const direction = e.deltaY < 0 ? 1 : -1;
    const zoomFactor = 1 + direction * 0.15; // 15% step per tick

    const newScale = Math.min(maxScale, Math.max(minScale, scale * zoomFactor));
    const actualFactor = newScale / scale;

    // Keep the mouse-anchored point stable: t' = m - f*(m - t)
    const newTx = mouseX - actualFactor * (mouseX - translate.x);
    const newTy = mouseY - actualFactor * (mouseY - translate.y);

    const clamped = clampTranslate(newTx, newTy, newScale);
    setScale(newScale);
    setTranslate(clamped);
  };

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsPanning(true);
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isPanning || !lastPos) return;
    const dx = e.clientX - lastPos.x;
    const dy = e.clientY - lastPos.y;
    const next = clampTranslate(translate.x + dx, translate.y + dy, scale);
    setTranslate(next);
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const endPan = () => {
    setIsPanning(false);
    setLastPos(null);
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={endPan}
      onMouseLeave={endPan}
      className="relative overflow-hidden rounded-lg bg-gray-50 select-none h-[400px] md:h-[600px]"
      style={{ cursor: isPanning ? "grabbing" : scale > 1 ? "grab" : "default" }}
    >
      {/* Transformed image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={onImgLoad}
        draggable={false}
        className="absolute top-0 left-0 will-change-transform"
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          transformOrigin: "0 0",
          // Render at natural size; we control scaling via transform
          width: imgSize.width ? `${imgSize.width}px` : "auto",
          height: imgSize.height ? `${imgSize.height}px` : "auto",
        }}
      />

      {/* Helper hint (only when at min zoom) */}
      {scale === minScale && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-xs md:text-sm text-gray-600 bg-white/80 backdrop-blur px-2 py-1 rounded shadow">
          Scroll to zoom • Drag to pan
        </div>
      )}
    </div>
  );
}

const MapSection = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Choose Your Perfect Block & Size
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interactive map showing available blocks. Use your mouse wheel to zoom and drag to pan across the master plan.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto border border-slate-300 shadow-sm bg-white/90 backdrop-blur">
          <CardContent className="p-4 md:p-8">
            <InteractiveZoomPanImage
              src="/images/master-plan.png"
              alt="Kunjwal City Master Plan"
              minScale={1}
              maxScale={4}
              initialScale={1}
            />
          </CardContent>
        </Card>

        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold text-text-dark mb-4">
            Ready to Secure Your Plot?
          </h3>
          <p className="text-gray-600 mb-6">
            Our expert team will help you choose the perfect plot size and block location for your needs.
          </p>
          <Button
            size="lg"
            className="bg-golden-accent hover:bg-golden-hover text-white font-semibold px-8 py-4"
          >
            View Available Plots
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;