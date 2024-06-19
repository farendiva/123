import Link from "next/link";

const PurchasePage = () => {
  return (
    <main className="w-11/12 lg:w-3/5 mx-auto my-8 lg:my-16">
      <section className="w-full max-w-xl lg:max-w-full mx-auto flex-shrink-0">
        <button className="bg-sky text-sm text-white py-1 px-7 rounded-3xl">
          Saham
        </button>
      </section>
      <section className="w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
        <section className="w-full max-w-xl space-y-4">
          <section className="space-y-4 my-4 lg:my-7">
            <h1 className="text-xl lg:text-2xl font-bold">
              Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan
            </h1>
            <p>Kode efek : ABPP1</p>
          </section>
          <section className="py-6 space-y-6">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm lg:text-[15px] font-medium text-gray-900 dark:text-white"
              >
                Harga Per Lembar Efek
              </label>
              <button className="bg-[#f2f5ff] text-sky text-left px-2 hover:bg-slate-100 font-bold py-3 w-full rounded-xl">
                Rp 100.000
              </button>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm lg:text-[15px] font-medium text-gray-900 dark:text-white"
              >
                Jumlah Pendanaan
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-[#f2f5ff] text-black placeholder:text-[#7c7c7c] text-sm lg:text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi nilai pendanaan yang diinginkan"
                required
              />
            </div>
            <form className="w-full mx-auto space-y-2">
              <label
                htmlFor="quantity-input"
                className="block text-sm lg:text-[15px] font-medium text-gray-900 dark:text-white"
              >
                Jumlah Lembar Saham
              </label>
              <div className="w-full relative flex items-center gap-4">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="bg-emerald-light dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-green-700 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 text-white font-bold dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="bg-[#f2f5ff] rounded-lg border-x-0 border-gray-300 h-11 text-center text-black font-bold text-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="999"
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className="bg-emerald-light  dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-green-700 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 text-white font-bold dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm lg:text-[15px] font-medium text-gray-900 dark:text-white"
              >
                Nilai Investasi
              </label>
              <button className="bg-sky hover:bg-sky-950 font-bold py-3 w-full text-white text-left px-2 rounded-xl">
                Rp 5.000.000.000
              </button>
            </div>
          </section>
        </section>
        <section className="w-full max-w-xl mx-auto">
          <section className="w-full  h-[460px] mb-2 py-4 flex flex-col justify-start items-center gap-4 bg-[#f2f5ff] rounded-3xl">
            <section className="w-11/12 p-4 flex flex-col bg-white rounded-3xl text-[#677AB9] text-sm lg:text-[15px] font-bold space-y-4  ">
              <h3>Rincian Pembayaran</h3>
              <section>
                <p className="text-[#677AB9] font-medium">Nilai Investasi</p>
                <h3 className="text-sky font-bold">Rp 2.300.000</h3>
              </section>
              <section>
                <p className="text-[#677AB9] font-medium">
                  Jumlah Lembar Saham
                </p>
                <h3 className="text-sky font-bold">23 Lembar</h3>
              </section>
              <section>
                <p className="text-[#677AB9] font-medium">Biaya Platform</p>
                <h3 className="text-sky font-bold">Rp 5.000</h3>
              </section>
              <section>
                <p className="text-[#677AB9] font-medium">PPN</p>
                <h3 className="text-sky font-bold">Rp 550</h3>
              </section>
            </section>
            <section className="w-11/12 py-2 flex flex-col bg-white rounded-xl text-[#677AB9] text-sm lg:text-[15px] font-bold space-y-4  ">
              <h3 className="px-4">Metode Pembayaran</h3>
              <div className="flex justify-start items-center gap-2 ">
                <img
                  className="ml-4 p-4 bg-[#f2f5ff] rounded-xl"
                  src="/icons/Danamon.svg"
                  alt="Danamon Logo"
                />
                <h3>Danamon Virtual Account</h3>
              </div>
            </section>
          </section>
          <section className="relative top-6 lg:top-9 mb-8 lg:mb-0">
            <Link
              href="/purchase"
              className="w-full mb-2 block text-center bg-emerald-light hover:bg-green-700 rounded-4xl text-white text-sm font-semibold py-4"
            >
              Beli Saham
            </Link>
            <p className="text-sky text-sm text-center">
              Butuh Pertanyaan?{" "}
              <span className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer">
                Hubungi Kami
              </span>{" "}
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default PurchasePage;
