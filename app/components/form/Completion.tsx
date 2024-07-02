import Link from "next/link";
import React, { useEffect } from "react";
import { FC } from "react";

const Completion: FC = () => {
  return (
    <>
      <div className="w-11/12 lg:w-4/5 h-[60vh] flex flex-col justify-center items-center mx-auto text-sky space-y-6">
        <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
        <div className="text-center text-xl lg:text-2xl max-w-xl space-y-4">
          <h2 className="leading-7">
            Terima kasih sudah melengkapi data diri anda. Data akan kami
            verifikasi maksimal 2 x 24 jam.
          </h2>
        </div>
        <Link
          href="/"
          className="mx-auto bg-emerald-light text-base lg:text-[18px] px-12 py-2 rounded-3xl font-semibold text-white shadow-sm hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Kembali Ke Beranda
        </Link>
      </div>
    </>
  );
};

export default Completion;
