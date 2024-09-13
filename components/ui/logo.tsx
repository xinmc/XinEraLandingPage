import Link from "next/link";
import XinEraLOGO from "@/public/images/LOGO.png";

export default function Logo() {
  return (
    <Link href="https://www.mcxin.top" className="inline-flex" aria-label="XinEraLOGO">
      <img src={XinEraLOGO.src} alt="XinEraLOGO" className="w-10 h-10" />
    </Link>
  );
}
