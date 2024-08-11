"use client";

import { ChangeEvent, useState } from "react";
import { Box, X } from "lucide-react";
import { formatRupiah } from "@/lib/rupiah";
import { usePathname } from "next/navigation";

type SimulasiProps = {
  data: number;
  roi: number;
};

const SimulasiComponent: React.FC<SimulasiProps> = ({ data, roi }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jumlahLembar, setJumlahLembar] = useState<number>(1);
  const [jumlahPendanaan, setJumlahPendanaan] = useState<string>("");
  const [mode, setMode] = useState("Unit");
  const [jumlahUnit, setJumlahUnit] = useState<number>(1);
  const [jumlahInvestasi, setJumlahInvestasi] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );
  const pathname = usePathname();
  const nilaiInvestasi = data * jumlahUnit;

  const updateJumlahPendanaan = (lembar: number) => {
    const pendanaan = lembar * data;
    setJumlahPendanaan(formatRupiah(pendanaan));
  };

  const handleIncrement = () => {
    setJumlahLembar((prevJumlah) => {
      const newJumlah = prevJumlah + 1;
      updateJumlahPendanaan(newJumlah);
      return newJumlah;
    });
  };

  const handleDecrement = () => {
    setJumlahLembar((prevJumlah) => {
      const newJumlah = prevJumlah > 0 ? prevJumlah - 1 : 0;
      updateJumlahPendanaan(newJumlah);
      return newJumlah;
    });
  };

  const handleJumlahChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    const newJumlah = isNaN(value) ? 0 : value;
    setJumlahLembar(newJumlah);
    updateJumlahPendanaan(newJumlah);
  };

  const handleJumlahPendanaanChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/[^0-9]/g, ""), 10);
    setJumlahPendanaan(e.target.value); // Set the raw input value temporarily
    if (!isNaN(value)) {
      setJumlahLembar(Math.ceil(value / data)); // Calculate and set jumlah lembar
    } else {
      setJumlahPendanaan("");
      setJumlahLembar(0);
    }
  };

  const handleBlur = () => {
    // This function is called when the input loses focus
    const rawValue = parseInt(jumlahPendanaan.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(rawValue)) {
      let roundedPendanaan = Math.ceil(rawValue / data) * data;
      setJumlahPendanaan(formatRupiah(roundedPendanaan));
      setJumlahLembar(roundedPendanaan / data);
    } else {
      setJumlahPendanaan("");
      setJumlahLembar(0);
    }
  };

  const handleJumlahUnitChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setJumlahUnit(isNaN(value) ? 0 : value);
  };

  const handleJumlahInvestasiChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(value)) {
      setJumlahInvestasi(formatRupiah(value));
      const jumlahUnit = Math.ceil(value / data);
      setJumlahUnit(jumlahUnit);

      // Check if value is a multiple of the unit price
      if (value % data !== 0) {
        setValidationMessage(
          `Nilai investasi akan dibulatkan ke kelipatan harga per lembar efek`
        );
      } else {
        setValidationMessage(null);
      }
    } else {
      setJumlahInvestasi("");
      setJumlahUnit(0);
      setValidationMessage(null);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = isModalOpen ? "auto" : "hidden";
  };

  return (
    <>
      <button className="w-full flex items-center gap-2" onClick={toggleModal}>
        <Box fill="black" color="white" />
        Simulasi
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg space-y-4 w-3/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Box fill="black" color="white" />
                <h2 className="text-lg font-semibold">Simulasi</h2>
              </div>
              <button
                onClick={toggleModal}
                className="hover:bg-gray-200 rounded-full p-2"
              >
                <X size={20} />
              </button>
            </div>
            {pathname.includes("saham") ? (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="jumlah_pendanaan"
                    className="block mb-2 text-sm lg:text-[15px] font-medium text-sky dark:text-white"
                  >
                    Jumlah Pendanaan
                  </label>
                  <input
                    type="text"
                    id="jumlah_pendanaan"
                    className="bg-[#f2f5ff] text-sky font-bold placeholder:text-[#7c7c7c] placeholder:font-medium text-sm lg:text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Isi nilai pendanaan yang diinginkan"
                    value={jumlahPendanaan}
                    onBlur={handleBlur}
                    onChange={handleJumlahPendanaanChange}
                    required
                  />
                  <p className="text-[10px] text-sky mt-1">
                    Nominal harus kelipatan {formatRupiah(data)}
                  </p>
                </div>
                <form className="w-full mx-auto space-y-2">
                  <label
                    htmlFor="quantity-input"
                    className="block text-sm lg:text-[15px] font-medium text-sky dark:text-white"
                  >
                    Jumlah Lembar
                  </label>
                  <div className="w-full relative flex items-center gap-4">
                    <button
                      type="button"
                      id="decrement-button"
                      onClick={handleDecrement}
                      className="bg-[#677AB9] hover:bg-[#4a5886] border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="quantity-input"
                      value={jumlahLembar}
                      onChange={handleJumlahChange}
                      aria-describedby="helper-text-explanation"
                      className="bg-[#f2f5ff] rounded-lg border-x-0 border-gray-300 h-11 text-center text-black font-bold text-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="999"
                      required
                    />
                    <button
                      type="button"
                      id="increment-button"
                      onClick={handleIncrement}
                      className="bg-[#677AB9] hover:bg-[#4a5886] border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                <div className="text-sky text-sm lg:text-[15px]">
                  <p>Estimasi ROI (Berdasarkan Proyeksi)</p>
                  <p className="font-bold">{roi}%</p>
                </div>
                <div className="text-sky text-sm lg:text-[15px]">
                  <p>Tenor</p>
                  <p className="font-bold">6 Bulan</p>
                </div>
                <div className="text-sky text-sm lg:text-[15px]">
                  <p>Estimasi Keuntungan (Berdasarkan Proyeksi)</p>
                  <p className="font-bold">
                    {formatRupiah(
                      (parseInt(jumlahPendanaan.replace(/[^0-9]/g, ""), 10) ||
                        0) *
                        (roi / 100)
                    )}
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="bg-[#f2f5ff] text-sky font-bold placeholder:text-[#7c7c7c] placeholder:font-medium text-sm lg:text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={
                      mode === "Unit"
                        ? "Isi jumlah unit"
                        : "Isi jumlah investasi"
                    }
                    value={mode === "Unit" ? jumlahUnit : jumlahInvestasi}
                    onChange={
                      mode === "Unit"
                        ? handleJumlahUnitChange
                        : handleJumlahInvestasiChange
                    }
                    required
                  />
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="bg-[#677AB9] hover:bg-[#4a5886] text-white font-bold text-sm rounded-lg block w-2/5 p-2.5"
                  >
                    <option value="Unit">Unit</option>
                    <option value="Nominal">Nominal</option>
                  </select>
                </div>
                {mode === "Nominal" && validationMessage && (
                  <p className="text-red-500 text-xs my-0 leading-none">
                    {validationMessage}
                  </p>
                )}
                <div className="text-sky text-sm lg:text-[15px]">
                  <p>Estimasi ROI (Berdasarkan Proyeksi)</p>
                  <p className="font-bold">{roi}%</p>
                </div>
                <div className="text-sky text-sm lg:text-[15px]">
                  <p>Tenor</p>
                  <p className="font-bold">6 Bulan</p>
                </div>
                <div className="text-sky text-sm lg:text-[15px]">
                  <p>Estimasi Keuntungan (Berdasarkan Proyeksi)</p>
                  <p className="font-bold">
                    {formatRupiah((nilaiInvestasi / 100) * roi)}
                  </p>
                </div>
                <button className="bg-[#f2f5ff] cursor-default text-[20px] w-full text-left text-sky font-bold p-3 rounded-xl">
                  {formatRupiah(nilaiInvestasi + (nilaiInvestasi / 100) * roi)}
                </button>
                <ul className="text-xs text-sky list-disc mx-4">
                  <li>Kinerja Masa lalu tidak menjamin Kinerja Masa depan</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SimulasiComponent;
