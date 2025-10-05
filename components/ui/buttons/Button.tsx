"use client";

import Link from "next/link";
import clsx from "clsx";
import type {
  PropsWithChildren,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

type BaseProps = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
} & PropsWithChildren;

type ButtonElProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick" | "disabled"
>;
type AnchorElProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function Button({
  href,
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...rest
}: BaseProps & ButtonElProps & AnchorElProps) {
  const base =
    "inline-flex items-center justify-center font-display font-bold uppercase tracking-wide rounded-xl " +
    "transition-transform transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none " +
    "hover:scale-105 active:scale-95";

  const variants = {
    primary:
      "bg-brand-purple text-white hover:bg-brand-orange focus-visible:ring-brand-purple",
    secondary:
      "bg-brand-lime text-neutral-black hover:bg-brand-orange focus-visible:ring-brand-lime",
    outline:
      "border-2 border-current text-current bg-transparent hover:bg-current hover:text-neutral-black focus-visible:ring-brand-purple",
    ghost:
      "bg-transparent text-neutral-black hover:text-brand-purple focus-visible:ring-brand-purple",
  } as const;

  // 🔥 ancora più lunghi
  const sizes = {
    sm: "min-h-[44px] px-8 py-2.5 text-sm",   // più largo del normale "small"
    md: "min-h-[56px] px-12 py-3.5 text-base", // CTA principale standard
    lg: "min-h-[64px] px-16 py-4 text-lg",     // CTA grande, molto lunga
  } as const;

  const width = fullWidth ? "w-full" : "w-full md:w-auto";

  const classes = clsx(base, variants[variant], sizes[size], width, className);

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(rest as AnchorElProps)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={classes}
      {...(rest as ButtonElProps)}
    >
      {children}
    </button>
  );
}
