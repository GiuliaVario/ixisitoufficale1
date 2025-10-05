"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";

export type ServiceItem = {
  id: string;
  title: string;
  color: string;
  icon?: string;
  align?: "left" | "right";
  body: React.ReactNode;
};

type Props = { items: ServiceItem[]; id?: string; className?: string };

function Row({ item }: { item: ServiceItem }) {
  const right = item.align === "right";

  return (
    <>
      {/* COLONNA SINISTRA — solo desktop */}
      <div className={`hidden md:block ${right ? "md:pr-12 md:mt-10" : ""}`} aria-hidden={!right}>
        {right && (
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <div className="flex items-center gap-4 justify-start md:justify-end">
              <h3
                id={item.id}
                className="
                  font-display font-extrabold uppercase leading-none
                  break-words md:whitespace-nowrap
                "
                style={{ color: item.color, fontSize: "clamp(2.1rem,5.2vw,4rem)" }}
              >
                {item.title}
              </h3>
              {item.icon && (
                <Image
                  src={item.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="hidden md:inline-block shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
            <p className="mt-6 text-white/90 text-[clamp(1.06rem,1.7vw,1.16rem)] leading-relaxed max-w-[36rem]">
              {item.body}
            </p>
          </div>
        )}
      </div>

      {/* COLONNA DESTRA — solo desktop */}
      <div className={`hidden md:block ${right ? "" : "md:pl-12"}`} aria-hidden={right}>
        {!right && (
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-4 justify-start">
              {item.icon && (
                <Image
                  src={item.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="hidden md:inline-block shrink-0"
                  aria-hidden="true"
                />
              )}
              <h3
                className="
                  font-display font-extrabold uppercase leading-none
                  break-words md:whitespace-nowrap
                "
                style={{ color: item.color, fontSize: "clamp(2.1rem,5.2vw,4rem)" }}
              >
                {item.title}
              </h3>
            </div>
            <p className="mt-6 text-white/90 text-[clamp(1.06rem,1.7vw,1.16rem)] leading-relaxed max-w-[36rem]">
              {item.body}
            </p>
          </div>
        )}
      </div>

      {/* MOBILE — stack */}
      <div className="md:hidden col-span-1">
        <div className="flex items-center gap-3">
          {item.icon && (
            <Image src={item.icon} alt="" width={48} height={48} className="shrink-0" aria-hidden="true" />
          )}
          <h3
            className="
              font-display font-extrabold uppercase leading-none
              break-words md:whitespace-nowrap
            "
            style={{ color: item.color, fontSize: "clamp(1.9rem,7.5vw,3rem)" }}
          >
            {item.title}
          </h3>
        </div>
        <p className="mt-4 text-white/90 text-[1.05rem] leading-relaxed">{item.body}</p>
      </div>
    </>
  );
}

export default function ServicesSection({ items, id = "servizi", className }: Props) {
  return (
    <section
      id={id}
      className={`bg-[var(--brand-bg)] text-[var(--brand-fg)] pt-10 md:pt-14 pb-16 md:pb-24 ${className ?? ""}`}
    >
      <Container>
        <div className="relative">
          {/* linea centrale (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-white/75"
            style={{ top: 0, bottom: "-96px" }}
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 sm:gap-y-20 md:gap-y-24">
            {items.map((it) => (
              <Row key={it.id} item={it} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
