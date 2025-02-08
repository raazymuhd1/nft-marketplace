import Image from "next/image";
import { Hero, Tracking, Signal, TrendingNow } from "@/components";

export default function Home() {
  return (
    <main className="w-[95%] mx-auto">
       <Hero />
       <Tracking />
       <Signal />
       <TrendingNow />
    </main>
  );
}
