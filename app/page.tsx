
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  

  return (
    <>
     <Link href="/dashboard">
      <div className="w-screen h-screen m-auto flex items-center justify-center bg-gradient-to-bl from-slate-200 to-slate-400">
        <h1 className="text-4xl font-black animate-pulse">KALINDU AUTO</h1>
        <sup>By</sup>
        <h4>DevX10</h4>
      </div>
      </Link>
    </>
  );
}
