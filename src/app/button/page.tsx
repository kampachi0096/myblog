'use client'
import Image from "next/image";
import { useState } from "react";
import TopBar from "../UI/TopBar";


export default function Home() {
  const [click, setClick] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button className="py-1 px-5 bg-sky-500 rounded-full text-white font-black hover:bg-sky-800"  onClick={() => { setClick(!click) }}>
        ボタン
      </button>
      <p>{click ? "クリックされました。" : "クリックされてません。"}</p>
    </div>
  );

}