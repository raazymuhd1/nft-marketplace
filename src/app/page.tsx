import Image from "next/image";
import { Hero, Tracking, Signal } from "@/components";

export default function Home() {
  return (
    <main className="w-[95%] mx-auto overflow-x-auto">
       <Hero />
       <Tracking />
       <Signal />
    </main>
  );
}
