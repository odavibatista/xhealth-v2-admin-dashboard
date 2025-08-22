"use client";

import { JSX } from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Hamburger from "hamburger-react";

export default function Header() {

  const router = useRouter();

  const [header, setHeader] = useState("header");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={``} id="header">

    </header>
  );
}