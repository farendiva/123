"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { FormDataSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputOTPForm } from "./InputOTPForm";

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
    <section className="absolute inset-0 mx-auto flex w-1/2 flex-col justify-between p-24">
      {/* Form */}
      <form className="mt-12 py-12" onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-3xl leading-7 text-sky-900">
              Selamat Datang{" "}
              <span className="text-sky-900 font-bold">di Fulusme,</span>
            </h2>
            <p className="mt-1 w-2/3 text-lg leading-6 text-sky-900">
              Silahkan berinvestasi dengan Daftar diri anda terlebih dahulu
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
              <div className="sm:col-span-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="">
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="">
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="">
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nomor Handphone
                </label>
                <div className="">
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <InputOTPForm />
          </motion.div>
        )}
        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-3xl leading-7 font-bold text-sky-900">
              Buat Kata Sandi
            </h2>
            <p className="mt-1 w-full text-lg leading-6 text-sky-900">
              Gunakan kombinasi huruf, angka, huruf kapital dan karakter spesial
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
              <div className="sm:col-span-4 lg:col-span-8">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Kata Sandi
                </label>
                <div className="">
                  <input
                    id="password"
                    type="password"
                    {...register("password")}
                    autoComplete="password"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ulangi Kata Sandi
                </label>
                <div className="">
                  <input
                    id="password"
                    type="password"
                    {...register("password")}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center p-4">
              <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
              <div
                id="terms"
                onScroll={handleScroll}
                className="h-80 overflow-y-scroll bg-gray-100 border border-gray-300 p-4 mb-4 w-full"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                  venenatis euismod malesuada. Curabitur volutpat velit eu
                  lectus posuere, a dictum ligula facilisis. Fusce dapibus, nunc
                  at efficitur mollis, libero ex consequat elit, id lobortis
                  libero orci a ex. Nulla facilisi. Suspendisse potenti. Etiam
                  nec congue nisl. Nullam eu libero a dui gravida luctus vel ac
                  libero. Donec finibus lacus in ex vulputate, a fringilla justo
                  volutpat.
                </p>
                <p>
                  Donec feugiat eros at neque viverra, sed dignissim sapien
                  efficitur. Maecenas bibendum ipsum libero, a tempor mi
                  scelerisque vel. Sed volutpat, quam a tincidunt sollicitudin,
                  dolor libero ornare massa, eget vestibulum magna dui ut urna.
                  Nam varius dui id urna tincidunt tristique. Vestibulum gravida
                  convallis mauris ac fermentum. Duis vestibulum tincidunt
                  ultricies. Quisque condimentum magna a malesuada gravida. Sed
                  scelerisque ante et lorem ultricies convallis. Donec commodo,
                  ipsum ut finibus tempor, justo quam venenatis leo, sit amet
                  ullamcorper eros lacus sit amet turpis. Ut lacinia justo vitae
                  eros fermentum fermentum. Sed bibendum eros eget dolor
                  posuere, a dictum libero dapibus. Integer euismod, erat ac
                  varius ullamcorper, urna eros scelerisque lacus, in tristique
                  est urna eu augue.
                </p>
                <p>
                  Praesent in libero a eros euismod pellentesque. Suspendisse
                  potenti. Phasellus non purus at orci malesuada varius. Etiam
                  feugiat ligula et ex tempor, eget scelerisque elit dignissim.
                  Curabitur in diam odio. Nulla facilisi. Aenean quis est eu
                  justo pharetra gravida. Quisque ac dapibus arcu. Duis in eros
                  vel eros consequat tempor. Integer elementum lacinia nisl, sed
                  elementum dolor euismod in. Sed convallis, nulla sit amet
                  aliquet vehicula, arcu erat pulvinar dolor, nec gravida tortor
                  arcu eget velit. Phasellus condimentum ex euismod orci
                  scelerisque, ut tempor neque fringilla.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="w-4/5 text-sky-900 text-center">
              <h2 className="text-lg leading-7">
                Silahkan cek email anda untuk aktivasi akun anda, dan tekan
                tombol
                <span className="font-semibold"> aktifkan akun.</span>
              </h2>
              <p className="mt-1 text-sm leading-6 ">
                Tidak menerima Email?{" "}
                <span className="text-green-700 font-semibold">
                  Kirim Ulang
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </form>

      {/* Navigation */}
      <div
        className={`mt-8 pt-5 flex ${
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
          } bg-green-600 px-12 py-2 rounded-3xl font-semibold text-white shadow-sm hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Lanjutkan
        </button>
      </div>
    </section>
  );
}
