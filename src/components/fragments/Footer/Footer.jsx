import React from "react";
import Image from "next/image";
import LogoMK from "@/assets/image/logo-mk.png";
import IconFacebook from "@/components/ui/icons/IconFacebook";
import IconWhatsapp from "@/components/ui/icons/IconWhatsapp";
import IconInstagram from "@/components/ui/icons/IconInstagram";
export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-Headline text-white bottom-0">
      <aside>
        <Image src={LogoMK} width={100} height={100} alt="" />
        <p className="font-bold">Berdiri sejak 2018</p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <IconFacebook />
          <IconWhatsapp />
          <IconInstagram />
        </div>
      </nav>
    </footer>
  );
}
