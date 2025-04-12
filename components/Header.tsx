'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import VerticalDivider from "./VerticalDivider";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white mx-auto mt-2 w-fit px-6 md:px-12 py-3 rounded-full shadow text-black">
      <div className="flex flex-row space-x-3 md:space-x-6 items-center">
        <Link href={"/"} className={pathname == '/' ? `font-bold` : ``}>Home</Link>
        <VerticalDivider />
        <Link href={"/event"} className={pathname == '/event' ? `font-bold` : ``}>Event</Link>
        <VerticalDivider />
        <Link href={"/order"} className={pathname == '/order' ? `font-bold` : ``}>Order</Link>
        <VerticalDivider />
        <Link href={"/tracking"} className={pathname == '/tracking' ? `font-bold` : ``}>Tracking</Link>
      </div>
    </header>
  );
}
