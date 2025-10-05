"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard, { type ProjectCardItem } from "@/components/shared/ProjectCard";

type Props = {
  items: ProjectCardItem[];
  className?: string;
  /** Altezza riga DESKTOP */
  height?: { base?: string; sm?: string; md?: string; lg?: string };
  /** Colonne in desktop */
  desktopColumns?: 3 | 4 | 5 | 6;
  /** Larghezza card in hover (desktop, %) */
  hoverPercent?: number;
  /** Altezze mobile */
  mobileItemHeight?: { base?: string; sm?: string };
};

export default function ExpandingRow({
  items,
  className,
  height = {
    base: "md:h-[520px]",
    sm: "md:h-[520px]",
    md: "md:h-[520px]",
    lg: "md:h-[560px]",
  },
  desktopColumns = 5,
  hoverPercent = 28,
  mobileItemHeight = {
    base: "h-[300px] min-h-[260px]",
    sm: "sm:h-[340px] sm:min-h-[300px]",
  },
}: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // media query desktop
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // reset scroll su mobile
  useEffect(() => {
    const el = rowRef.current;
    if (!el || isDesktop) return;
    el.scrollTop = 0;
    el.scrollLeft = 0;
  }, [isDesktop]);

  const basePercent = 100 / desktopColumns;
  const othersPercent = (100 - hoverPercent) / Math.max(1, desktopColumns - 1);

  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <div
        ref={rowRef}
        className={[
          "w-full",
          "flex flex-col md:flex-row",
          "overflow-y-auto md:overflow-y-hidden",
          "overflow-x-hidden md:overflow-x-auto",
          "snap-y snap-mandatory md:snap-none",
          "scrollbar-hide",
          "gap-0",
          "[&>*]:shrink-0",
          height.base,
          height.sm,
          height.md,
          height.lg,
        ].join(" ")}
        role="list"
        aria-label="Progetti"
      >
        {items.map((it, i) => {
          const basisDesktop =
            hoverIdx === null
              ? basePercent
              : hoverIdx === i
              ? hoverPercent
              : othersPercent;

          return (
            <div
              key={`${it.href ?? "#"}-${it.title}`}
              role="listitem"
              className={[
                "relative snap-center transition-all duration-300 ease-out",
                "w-full",
                mobileItemHeight.base,
                mobileItemHeight.sm,
                "md:h-full",
              ].join(" ")}
              onMouseEnter={isDesktop ? () => setHoverIdx(i) : undefined}
              onMouseLeave={isDesktop ? () => setHoverIdx(null) : undefined}
              style={{
                flexBasis: isDesktop ? `min(${basisDesktop}%, 100%)` : "auto",
                willChange: isDesktop ? "flex-basis" : undefined,
              }}
            >
              {/* se vuoi overlay sempre in hover, togli strip */}
              <ProjectCard item={it} priority={i === 0} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
