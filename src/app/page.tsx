import Image from "next/image";
import { Hero, Tracking } from "@/components";

export default function Home() {
  return (
    <main className="w-[95%] mx-auto overflow-x-auto">
       <Hero />
       <Tracking />
    </main>
  );
}
