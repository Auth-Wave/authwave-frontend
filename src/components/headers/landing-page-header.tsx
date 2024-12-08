import Link from "next/link";
import PrimaryBtn from "../buttons/primary-btn";
import Image from "next/image";

export default function LandingPageHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-20 py-10 2xl:px-30 2xl:py-16 flex flex-row justify-between items-center text-white text-14 2xl:text-20 ">
      <Link href="#hero">
        <div className="flex flex-row justify-center items-center gap-2">
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={45}
            height={45}
            className="2xl:w-[70px] 2xl:h-[70px]"
          />
          <p className="font-bold text-18 2xl:text-24">Auth Wave</p>
        </div>
      </Link>
      <nav className="hidden md:flex items-center gap-20 2xl:gap-30">
        <Link
          href="#features"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Features
        </Link>
        <Link
          href="#security"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Security
        </Link>
        <Link
          href="#pricing"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="https://github.com/Auth-Wave/authwave-docs/wiki"
          target="_blank"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Documentation
        </Link>
      </nav>
      <PrimaryBtn text="Console" href="/console" />
    </header>
  );
}
