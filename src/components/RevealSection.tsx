"use client";

import { useReveal } from "@/hooks/useReveal";

export function RevealSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useReveal();

  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
}) {
  const style = delay
    ? { transitionDelay: `${delay * 100}ms` }
    : undefined;

  return (
    <Tag
      data-reveal
      className={`opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.revealed]:opacity-100 [&.revealed]:translate-y-0 ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
