import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* コンテンツ */}

      <main>
        <div>
          <Image 
            aria-hidden
            src="/dybala1.png"
            alt="Globe icon"
            width={200}
            height={200}
          />

          <p className="text-6xl pt-10">KANTA YAMAMOTO</p>

          <p className="pt-5 text-gray-600">
            kore eigo yato omotta? yomu no menndokusa te omotta? jitu ha kore nihonngo nanndesuyo.<br />
            damasareta? wara. nannka jyuyou na koto kaiteru to omotta? konnna tokoro ni imi no aru koto nannka nanimo kaitenai yo.<br />
            kore wo yomu jikan ga aru nann te anata ha souto hima na hito nanndesune wara.
          </p>
        </div>
      </main>
    </div>

    /*<div className="grid grid-rows-[20px_1fr_20px] items-center 
    justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    </div>*/
  );
}
