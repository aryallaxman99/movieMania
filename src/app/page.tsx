import HeroSection from "@/components/HeroSection";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="m-40 flex justify-center text-center">
        <Link href={"/search"}>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white"
          >
            <span>View More</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  );
}
