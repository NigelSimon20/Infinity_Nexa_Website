import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  /** kept for API compatibility; the logo reads on dark backgrounds */
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

/**
 * Infinity Nexa logo — the real brand asset (transparent PNG in /public).
 * The mark + wordmark are one image, so no extra text is rendered.
 */
export default function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="Infinity Nexa — home"
    >
      <Image
        src="/logo.png"
        alt="Infinity Nexa — Business & IT Services"
        width={562}
        height={451}
        priority={priority}
        className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </Link>
  );
}
