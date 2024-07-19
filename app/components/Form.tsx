"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { RegistrationDataSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ToastAction } from "@/components/ui/toast";
import TermServices from "./TermServices";
import { usePathname } from "next/navigation";

type Inputs = z.infer<typeof RegistrationDataSchema>;

const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: ["namaDepan", "namaBelakang", "email", "phone"],
  },
  {
    id: "Step 2",
    name: "OTP",
    fields: ["pin"],
  },
  {
    id: "Step 3",
    name: "Password",
    fields: ["password", "passwordConfirmation"],
  },
  { id: "Step 4", name: "Terms and Conditions", fields: ["terms"] },
  { id: "Step 5", name: "Complete" },
];

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const pathname = usePathname();
  const client_id = uuidv4();
  const delta = currentStep - previousStep;
  const user_type = pathname === "/daftar/pemodal" ? "pemodal" : "penerbit";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(RegistrationDataSchema),
  });
  function convertPhoneNumber(phone: string) {
    if (phone.startsWith("0")) {
      return "62" + phone.slice(1);
    }
    return phone;
  }

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://oms-api-dev.khalifahdev.biz.id/api/v1/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nama_depan: `${data.namaDepan}`,
            nama_belakang: `${data.namaBelakang}`,
            email: data.email,
            no_handphone: convertPhoneNumber(data.phone),
            password: data.password,
            user_type: user_type,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        reset();
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network error
    } finally {
      setLoading(false); // Set loading to false setelah selesai mengirim data
    }
  };

  const checkEmailAvailability = async (email: any) => {
    try {
      const response = await fetch(
        "https://oms-api-dev.khalifahdev.biz.id/api/v1/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();

      if (!result.status && result.message.email) {
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error checking email availability:", error);
      return false;
    }
  };

  type FieldName = keyof Inputs;

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      setIsScrolledToBottom(true);
    } else {
      setIsScrolledToBottom(false);
    }
  };

  const next = async () => {
    if (loading) return; // Jika dalam keadaan loading, jangan lanjutkan

    const fields = steps[currentStep].fields;
    let output = true;
    if (fields) {
      output = await trigger(fields as FieldName[], { shouldFocus: true });
    }

    if (output && currentStep < steps.length - 1) {
      if (currentStep === 0) {
        // Check if email is available before moving to next step
        const email = watch("email");
        const isEmailAvailable = await checkEmailAvailability(email);

        if (!isEmailAvailable) {
          // Show error message
          toast({
            className: cn(
              "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
            ),
            variant: "destructive",
            title: "Email sudah terdaftar.",
            description: "Silakan gunakan email lain.",
            action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
          });
          return;
        }
      }

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
          <div
            className="w-4/5 lg:w-2/5 mx-auto text-sky"
            // initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
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
                  htmlFor="namaDepan"
                  className="block text-sm font-bold leading-6"
                >
                  Nama Depan
                </label>
                <div className="">
                  <input
                    type="text"
                    id="namaDepan"
                    {...register("namaDepan")}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mt-1 h-1">
                    {errors.namaDepan?.message && (
                      <p className="text-sm text-red-400">
                        {errors.namaDepan.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="namaBelakang"
                  className="block text-sm font-bold leading-6"
                >
                  Nama Belakang
                </label>
                <div className="">
                  <input
                    type="text"
                    id="namaBelakang"
                    {...register("namaBelakang")}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mt-1 h-1">
                    {errors.namaBelakang?.message && (
                      <p className="text-sm text-red-400">
                        {errors.namaBelakang.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 lg:col-span-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6"
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
                  className="block text-sm font-bold leading-6"
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
          </div>
        )}

        {currentStep === 1 && (
          <div
            className="w-4/5 lg:w-2/5 mx-auto text-sky"
            // initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center my-8 lg:my-0">
              <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
              <Link href="/" className="flex font-bold">
                <ChevronLeft />
                Kembali Ke Beranda
              </Link>
            </div>

            <section className="w-full mx-auto my-16">
              <h1 className="font-bold text-2xl xl:text-4xl">
                Masukkan Kode OTP
              </h1>
              <p className="text-base lg:text-xl">
                Kode OTP telah dikirimkan ke nomor{" "}
                <span className="font-bold">+6123456789</span>
              </p>
              <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                <InputOTPGroup className="gap-2 lg:gap-4 mt-8 lg:mt-16">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p
                id="helper-text-explanation"
                className="mt-2 text-base text-sky"
              >
                00:35, tidak mendapatkan kode?
              </p>
              <p className="font-bold text-base text-sky">
                kirim ulang kode OTP
              </p>
            </section>
          </div>
        )}
        {currentStep === 2 && (
          <div
            className="w-4/5 lg:w-2/5 mx-auto text-sky space-y-6"
            // initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
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
                  className="block text-sm font-bold leading-6"
                >
                  Kata Sandi
                </label>
                <div className="">
                  <input
                    id="password"
                    type="password"
                    {...register("password")}
                    autoComplete="new-password"
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
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-bold leading-6"
                >
                  Ulangi Kata Sandi
                </label>
                <div className="">
                  <input
                    id="passwordConfirmation"
                    type="password"
                    {...register("passwordConfirmation")}
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-[#f7f7ff] shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mt-1 h-1">
                    {errors.passwordConfirmation?.message && (
                      <p className="text-sm text-red-400">
                        {errors.passwordConfirmation.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div
            className="w-4/5 lg:w-3/5 mx-auto text-sky space-y-6"
            // initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-center my-8 gap-2 lg:gap-4 lg:my-0">
              <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
              <h1 className="text-2xl lg:text-[40px]">
                Syarat dan Ketentuan <span className="font-bold">Fulusme</span>
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <TermServices handleScroll={handleScroll} />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                {...register("terms")}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm">
                Saya setuju dengan Syarat dan Ketentuan
              </label>
            </div>
            {errors.terms?.message && (
              <p className="text-sm text-red-400">{errors.terms.message}</p>
            )}
          </div>
        )}

        {currentStep === 4 && (
          <div
            className="w-11/12 lg:w-1/2 h-[60vh] flex flex-col justify-center items-center mx-auto text-sky space-y-6"
            // initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
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
          </div>
        )}
      </form>

      {/* Navigation */}
      <div
        className={`flex w-4/5 ${
          currentStep === 3 ? "lg:w-3/5" : "lg:w-2/5"
        } mx-auto items-center justify-between ${
          currentStep === 4 && "hidden"
        } ${currentStep === 1 || currentStep === 3 ? "flex-row-reverse" : ""}`}
      >
        <p className="text-sky text-sm text-center">
          Butuh Pertanyaan?{" "}
          <a
            href="https://api.whatsapp.com/send?phone=6282299996862&text=Assalamu%27alaikum%2C%0A%0Amohon%20info%20terbaru%20tentang%20Fulusme%20Urun%20Dana"
            className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer"
          >
            Hubungi Kami
          </a>{" "}
        </p>
        <button
          type="button"
          onClick={next}
          disabled={
            loading || // Disable tombol saat loading
            currentStep === steps.length - 1 ||
            (currentStep === 3 && !isScrolledToBottom)
          }
          className={`${
            currentStep === 4 && "hidden"
          } bg-emerald-light text-base lg:text-[18px] px-12 py-2 rounded-3xl font-semibold text-white shadow-sm hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {loading ? "Loading..." : "Lanjutkan"}
        </button>
      </div>
    </section>
  );
}
