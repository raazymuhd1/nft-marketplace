import Image from "next/image";
import { Hero, Tracking, Signal, TrendingNow, Support, Backers } from "@/components";

export default function Home() {
  return (
    <main className="w-full mx-auto">
       <Hero />
       <Tracking />
       <Signal />
       <TrendingNow />
       <Support />
       <Backers />
    </main>
  );
}
