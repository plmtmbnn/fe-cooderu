import React, { useEffect } from "react";
// import TopToBottom from '../lib/TopToBottom';
import WhatsappIcon from "../../public/assets/whatsapp.png";

import Image from "next/image";

import Link from "next/link";

function BackToTop({ className }) {
  // useEffect(() => {
  //     TopToBottom('.back-to-top');
  // });
  return (
    <div>
      <Link
        href="https://wa.me/+6281283968844"
        className="wa-float"
        rel="noreferrer"
        target="_blank"
      >
        <Image
          style={{ height: "70px", width: "70px" }}
          src={WhatsappIcon}
          alt="dss"
          className="fa fa-plus my-wa-float"
        />
      </Link>
    </div>
  );
}

export default BackToTop;
