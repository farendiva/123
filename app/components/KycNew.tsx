"use client";

import { ChangeEvent, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { KycPemodalFormSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Inputs = z.infer<typeof KycPemodalFormSchema>;

interface Step {
  id: string;
  name: string;
  fields?: string[];
  component: React.ComponentType<any>;
}

interface KycFormNewProps {
  steps: Step[];
}

const KycFormNew: React.FC<KycFormNewProps> = ({ steps }) => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [faceImage, setFaceImage] = useState<string | null>(null);
  const [ktpImage, setKtpImage] = useState<string | null>(null);

  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(KycPemodalFormSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log("Attempting to submit form with data:", data);

      const payload = {
        ...data,
        slip_gaji: data.slip_gaji,
      };

      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server response:", errorText);
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Form successfully submitted:", result);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    if (currentStep < steps.length - 1) {
      const step = steps[currentStep];

      // Validasi hanya untuk form yang memerlukan validasi
      if (step.fields) {
        const output = await trigger(step.fields as FieldName[], {
          shouldFocus: true,
        });

        if (!output) return;
      }

      // Handle form submission if it's the last step
      if (currentStep === steps.length - 2) {
        console.log("Attempting to submit the form on the last step");
        await handleSubmit(processForm)();
      }

      setPreviousStep(currentStep);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleFaceCaptured = (image: string) => {
    setFaceImage(image);
    setValue("swa_photo", image);
    next();
  };

  const handleKtpCaptured = (image: string) => {
    setKtpImage(image);
    setValue("ktp", image);
    next();
  };

  const StepComponent = steps[currentStep].component;

  return (
    <section className="mx-auto flex w-full flex-col my-2">
      {/* Steps */}
      {currentStep < 5 && (
        <header
          className={`w-full flex justify-between items-center my-8 lg:my-10`}
        >
          <img
            className="w-14 h-14"
            src="/icons/fulusme.svg"
            alt="Fulusme Icon"
          />
          <ol className="w-1/2 mx-auto flex justify-between items-center relative">
            {steps.slice(0, 5).map((step, index) => (
              <li
                key={step.id}
                className={`flex flex-col items-center w-full relative ${
                  index < currentStep
                    ? "text-emerald-light"
                    : index === currentStep
                    ? "text-sky"
                    : ""
                }`}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 ${
                    index < currentStep
                      ? "bg-emerald-light"
                      : index === currentStep
                      ? "bg-sky"
                      : "bg-gray-100 dark:bg-gray-700"
                  } rounded-full lg:h-12 lg:w-12 shrink-0 relative`}
                >
                  <img
                    className="w-3.5 h-3.5 lg:w-4 lg:h-4"
                    src={
                      index === 0
                        ? "/icons/face-verified.svg"
                        : index === 1
                        ? "/icons/card-verified.svg"
                        : index === 2
                        ? "/icons/document.svg"
                        : index === 3
                        ? "/icons/money.svg"
                        : "/icons/shield.svg"
                    }
                    alt={step.name}
                  />
                  {index < 4 && (
                    <span
                      className={`absolute left-1/2 top-1/2 transform -translate-y-1/2 w-full h-1 ${
                        index < currentStep
                          ? "bg-emerald-light"
                          : "bg-gray-100 dark:bg-gray-700"
                      }`}
                      style={{
                        width: `calc(100% + ${150}%)`, // Adjust the width calculation based on the number of steps
                        zIndex: -1,
                      }}
                    ></span>
                  )}
                </span>
                <span className="mt-2 text-center text-xs lg:text-sm">
                  {step.name}
                </span>
              </li>
            ))}
          </ol>
          <Link href="/" className="flex font-bold">
            <ChevronLeft />
            Kembali
          </Link>
        </header>
      )}

      {/* Form */}
      <form
        className={`my-6 ${currentStep === 5 ? "lg:my-4" : "lg:my-6"}`}
        onSubmit={handleSubmit(processForm)}
      >
        <motion.div
          key={currentStep}
          className="w-4/5 lg:w-1/2 mx-auto text-sky"
          initial={{ x: delta >= 0 ? 50 : -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Suspense fallback={<>Loading...</>}>
            <StepComponent
              register={register}
              control={control}
              setValue={setValue}
              watch={watch}
              trigger={trigger}
              errors={errors}
              faceImage={faceImage}
              ktpImage={ktpImage}
              onCaptured={
                currentStep === 0 ? handleFaceCaptured : handleKtpCaptured
              }
            />
          </Suspense>
        </motion.div>
      </form>
      <div
        className={`flex w-1/2 mx-auto  ${
          (currentStep === 0 || currentStep === 1 || currentStep === 5) &&
          "hidden"
        }`}
      >
        <button
          type="button"
          onClick={next}
          className={`w-full bg-emerald-light text-base lg:text-[18px] px-12 py-2 rounded-3xl font-semibold text-white shadow-sm hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Selanjutnya
        </button>
      </div>
    </section>
  );
};

export default KycFormNew;
