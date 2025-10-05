"use client";

export type SocialIconName =
  | "whatsapp"
  | "tiktok"
  | "facebook"
  | "gmail"
  | "instagram"
  | "linkedin";

type Props = {
  /** nome file nella cartella /public/icons/social/<name>.svg */
  name: SocialIconName;
  /** dimensione in px (default 48) */
  size?: number;
  className?: string;
};

/**
 * Icona monocromatica colorabile via CSS (currentColor) usando mask-image.
 * Assicurati che il file esista in /public/icons/social/<name>.svg
 */
export default function SocialIcon({ name, size = 48, className }: Props) {
  const src = `/icons/social/${name}.svg`; // 👈 percorso aggiornato (nuova struttura)

  return (
    <span
      aria-hidden="true"
      className={`inline-block align-middle${className ? ` ${className}` : ""}`}
      style={{
        width: size,
        height: size,
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
