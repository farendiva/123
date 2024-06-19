"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { FormDataSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputOTPForm } from "./InputOTPForm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: ["firstName", "lastName", "email", "phone"],
  },
  {
    id: "Step 2",
    name: "OTP",
    fields: ["pin"],
  },
  {
    id: "Step 3",
    name: "Password",
    fields: ["password"],
  },
  { id: "Step 4", name: "Terms and Conditions" },
  { id: "Step 5", name: "Complete" },
];

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      setIsScrolledToBottom(true);
    } else {
      setIsScrolledToBottom(false);
    }
  };
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    if (currentStep === 3 && !isScrolledToBottom) {
      return;
    }

    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  return (
    <section className="mx-auto flex w-full flex-col my-2">
      {/* Form */}
      <form
        className={`my-6 ${currentStep === 3 ? "lg:my-4" : "lg:my-12"}  `}
        onSubmit={handleSubmit(processForm)}
      >
        {currentStep === 0 && (
          <motion.div
            className="w-4/5 lg:w-2/5 mx-auto text-sky"
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center my-8 lg:my-0">
              <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
              <Link href="/" className="flex font-bold">
                <ChevronLeft />
                Kembali Ke Beranda
              </Link>
            </div>
            <h2 className="text-2xl lg:text-[40px] leading-relaxed">
              Selamat Datang <span className="font-bold">di Fulusme,</span>
            </h2>
            <p className="mt-1 w-full lg:w-2/3 text-lg lg:text-2xl leading-relaxed">
              Silahkan berinvestasi dengan Daftar diri anda terlebih dahulu
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8">
              <div className="sm:col-span-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6"
                >
                  First name
                </label>
                <div className="">
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mt-1 h-1">
                    {errors.firstName?.message && (
                      <p className="text-sm text-red-400">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6"
                >
                  Last name
                </label>
                <div className="">
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mt-1 h-1">
                    {errors.lastName?.message && (
                      <p className="text-sm text-red-400">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 lg:col-span-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6"
                >
                  Email
                </label>
                <div className="">
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mt-1 h-1">
                    {errors.email?.message && (
                      <p className="text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 lg:col-span-8">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6"
                >
                  Nomor Handphone
                </label>
                <div className="">
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mt-1 h-1">
                    {errors.phone?.message && (
                      <p className="text-sm text-red-400">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            className="w-4/5 lg:w-2/5 mx-auto text-sky"
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center my-8 lg:my-0">
              <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
              <Link href="/" className="flex font-bold">
                <ChevronLeft />
                Kembali Ke Beranda
              </Link>
            </div>
            <InputOTPForm />
          </motion.div>
        )}
        {currentStep === 2 && (
          <motion.div
            className="w-4/5 lg:w-2/5 mx-auto text-sky space-y-6"
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center my-8 lg:my-0">
              <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
              <Link href="/" className="flex font-bold">
                <ChevronLeft />
                Kembali Ke Beranda
              </Link>
            </div>
            <h2 className="text-2xl lg:text-[40px] leading-7 font-bold">
              Buat Kata Sandi
            </h2>
            <p className="mt-1 w-full text-lg lg:text-2xl leading-6">
              Gunakan kombinasi huruf, angka, huruf kapital dan karakter spesial
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
              <div className="sm:col-span-4 lg:col-span-8">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Kata Sandi
                </label>
                <div className="">
                  <input
                    id="password"
                    type="password"
                    {...register("password")}
                    autoComplete="password"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-[#f7f7ff] shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mt-1 h-1">
                    {errors.password?.message && (
                      <p className="text-sm text-red-400">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 lg:col-span-8">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Ulangi Kata Sandi
                </label>
                <div className="">
                  <input
                    id="password"
                    type="password"
                    {...register("password")}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-[#f7f7ff] shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mt-1 h-1">
                    {errors.password?.message && (
                      <p className="text-sm text-red-400">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            className="w-4/5 lg:w-3/5 mx-auto text-sky space-y-6"
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-center my-8 gap-2 lg:gap-4 lg:my-0">
              <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
              <h1 className="text-2xl lg:text-[40px]">
                Syarat dan Ketentuan <span className="font-bold">Fulusme</span>
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div
                id="terms"
                onScroll={handleScroll}
                className="h-128 overflow-y-scroll bg-[#f7f7ff] rounded-xl p-4 mb-4 w-full"
              >
                <h4>Syarat dan Ketentuan Umum</h4>
                <ul className="">
                  <li>1. Kata Pengantar</li>
                  <li>
                    2. Syarat dan Ketentuan Umum ini mengatur hak dan kewajiban
                    yang mengikat secara hukum terhadap Pengguna untuk
                    mengakses, menggunakan dan mengunjungi setiap dan seluruh
                    laman situs (website) dan layanan yang terdapat pada situs
                    www.Fulusme.id (“Situs Fulusme“). Situs Fulusme merupakan
                    situs milik dari PT. Fulusme (atau dikenal dengan nama
                    “Fulusme” atau “Penyelenggara”) yang merupakan penyelenggara
                    penawaran efek melalui layanan urun dana berbasis teknologi
                    informasi (Securities Crowdfunding) berdasarkan Peraturan
                    Otoritas Jasa Keuangan No.57 Tahun 2020 (selanjutnya disebut
                    “POJK”) yang telah memperoleh izin dari Otoritas Jasa
                    Keuangan Republik Indonesia (selanjutnya disebut OJK RI)
                    berdasarkan Surat Keputusan No: KEP-38/D.04/2021 tentang
                    Pemberian Izin Usaha Penyelenggara Penawaran Efek Melalui
                    Layanan Urun Dana Berbasis Teknologi Informasi (Securities
                    Crowdfunding) PT. Fulusme.
                  </li>
                  <li>
                    3. Situs Fulusme merupakan Penawaran Efek melalui Layanan
                    Urun Dana Berbasis Teknologi Informasi yang selanjutnya
                    disebut Layanan Urun Dana adalah penyelenggaraan layanan
                    penawaran efek yang dilakukan oleh penerbit untuk menjual
                    efek secara langsung kepada pemodal melalui jaringan sistem
                    elektronik yang bersifat terbuka, yang mempertemukan Pemodal
                    dan Penerbit yang menawarkan efeknya melalui Fulusme
                    (Pemodal dan Penerbit selanjutnya disebut “Pengguna”) Dengan
                    mengakses dan memiliki akun pada Situs Fulusme, anda selaku
                    pengguna dengan ini menyatakan menerima Syarat dan Ketentuan
                    umum di bawah ini secara keseluruhan.
                  </li>
                  <li>
                    {" "}
                    4. Situs Fulusme merupakan Penawaran Efek melalui Layanan
                    Urun Dana Berbasis Teknologi Informasi yang selanjutnya
                    disebut Layanan Urun Dana adalah penyelenggaraan layanan
                    penawaran efek yang dilakukan oleh penerbit untuk menjual
                    efek secara langsung kepada pemodal melalui jaringan sistem
                    elektronik yang bersifat terbuka, yang mempertemukan Pemodal
                    dan Penerbit yang menawarkan efeknya melalui Fulusme
                    (Pemodal dan Penerbit selanjutnya disebut “Pengguna”) Dengan
                    mengakses dan memiliki akun pada Situs Fulusme, anda selaku
                    pengguna dengan ini menyatakan menerima Syarat dan Ketentuan
                    umum di bawah ini secara keseluruhan.
                  </li>
                  <li>
                    {" "}
                    5. Situs Fulusme merupakan Penawaran Efek melalui Layanan
                    Urun Dana Berbasis Teknologi Informasi yang selanjutnya
                    disebut Layanan Urun Dana adalah penyelenggaraan layanan
                    penawaran efek yang dilakukan oleh penerbit untuk menjual
                    efek secara langsung kepada pemodal melalui jaringan sistem
                    elektronik yang bersifat terbuka, yang mempertemukan Pemodal
                    dan Penerbit yang menawarkan efeknya melalui Fulusme
                    (Pemodal dan Penerbit selanjutnya disebut “Pengguna”) Dengan
                    mengakses dan memiliki akun pada Situs Fulusme, anda selaku
                    pengguna dengan ini menyatakan menerima Syarat dan Ketentuan
                    umum di bawah ini secara keseluruhan.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
            className="w-11/12 lg:w-1/2 h-[60vh] flex flex-col justify-center items-center mx-auto text-sky space-y-6"
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
            <div className="text-center text-xl lg:text-2xl max-w-xl space-y-4">
              <h2 className="leading-7">
                Silahkan cek email anda untuk aktivasi akun anda, dan tekan
                tombol
                <span className="font-bold"> aktifkan akun.</span>
              </h2>
              <p className="mt-1 text-sm leading-6 ">
                Tidak menerima Email?{" "}
                <span className="text-emerald font-semibold hover:underline underline-offset-2 decoration-emerald-light">
                  Kirim Ulang
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </form>

      {/* Navigation */}
      <div
        className={`flex w-4/5 ${
          currentStep === 3 ? "lg:w-3/5" : "lg:w-2/5"
        } mx-auto ${
          currentStep === 1 || currentStep === 3
            ? "justify-start"
            : "justify-end"
        }`}
      >
        <button
          type="button"
          onClick={next}
          disabled={
            currentStep === steps.length - 1 ||
            (currentStep === 3 && !isScrolledToBottom)
          }
          className={`${
            currentStep === 4 && "hidden"
          } bg-emerald-light text-base lg:text-[18px] px-12 py-2 rounded-3xl font-semibold text-white shadow-sm hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Lanjutkan
        </button>
      </div>
    </section>
  );
}
