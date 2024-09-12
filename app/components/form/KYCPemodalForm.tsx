"use client";

import { ChangeEvent, Suspense, useState } from "react";
import { z } from "zod";
import { KycPemodalFormSchema } from "../../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import useFetchProtectedData from "@/lib/fetchProtectedData";
import Cookies from "js-cookie";
import { useUser } from "@/context/UserContext";

type Inputs = z.infer<typeof KycPemodalFormSchema>;

interface Step {
  id: string;
  name: string;
  fields?: string[];
  component: React.ComponentType<any>;
}

interface StepProps {
  steps: Step[];
}

interface Profile {
  nama_depan: string;
  nama_belakang: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  no_handphone: string;
  no_ktp: string;
  no_npwp: string | null;
  no_sid: string | null;
  agama: string;
  kewarganegaraan: string;
  alamat_ktp: string;
  kelurahan_ktp: string | null;
  kecamatan_ktp: string | null;
  kabupaten_ktp: string | null;
  provinsi_ktp: string | null;
  alamat_domisili: string | null;
  kelurahan_domisili: string | null;
  kecamatan_domisili: string | null;
  kabupaten_domisili: string | null;
  provinsi_domisili: string | null;
  pendidikan: string;
  pekerjaan: string;
  industri_pekerjaan: string;
  pendapatan: string;
  pendapatan_per_bulan: string;
  sumber_pendapatan: string;
  status_id: number;
  status: string;
  nomor_rekening: string;
  nama_pemilik_rekening: string;
  nama_bank: string | null;
  nama_ibu_kandung: string;
  kabupaten_cabang_bank: string | null;
  ktp: string | File;
  npwp: string | File;
  swa_photo: string | File;
  slip_gaji: string | File;
  kartu_keluarga: string | File;
}

const KYCPemodalForm: React.FC<StepProps> = ({ steps }) => {
  const [previousStep, setPreviousStep] = useState(0);
  const { user } = useUser();
  const [currentStep, setCurrentStep] = useState(0);
  const [faceImage, setFaceImage] = useState<File | null>(null);
  const [ktpImage, setKtpImage] = useState<File | null>(null);
  const { postProtectedData } = useFetchProtectedData();
  const [formData, setFormData] = useState<Partial<Profile> | undefined>(
    user?.profile
  );
  const [originalData, setOriginalData] = useState<
    Partial<Profile> | undefined
  >(user?.profile);
  const delta = currentStep - previousStep;
  const token = Cookies.get("authToken");
  const user_id = Cookies.get("user_id");
  const pemodal_id = Cookies.get("pemodal_id");

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
    if (!formData) {
      console.error("Form data is undefined");
      return;
    }

    const personalFields = [
      "jenis_kelamin",
      "tempat_lahir",
      "tanggal_lahir",
      "no_ktp",
      "agama",
      "kewarganegaraan",
      "status_pernikahan",
      "alamat_ktp",
      "kelurahan_ktp",
      "kecamatan_ktp",
      "kabupaten_ktp",
      "provinsi_ktp",
      "rt_rw_ktp",
      "rt_rw_domisili",
      "kodepos_ktp",
      "kodepos_domisili",
      "alamat_domisili",
      "kelurahan_domisili",
      "kecamatan_domisili",
      "kabupaten_domisili",
      "provinsi_domisili",
      "pendidikan_terakhir",
      "pekerjaan",
      "industri_pekerjaan",
      "pendapatan_per_bulan",
      "handphone_kontak_darurat",
      "nama_kontak_darurat",
    ] as const;

    const personal: Partial<Record<keyof Profile, string | number | File>> = {
      status: 1,
    };

    personalFields.forEach((key) => {
      if (
        key in data &&
        data[key as keyof Inputs] !== originalData?.[key as keyof Profile] &&
        data[key as keyof Inputs] != null &&
        data[key as keyof Inputs] !== "" &&
        data[key as keyof Inputs] !== undefined
      ) {
        personal[key as keyof Profile] = data[key as keyof Inputs] as
          | string
          | number
          | File;
      }
    });

    const cleanPersonal = Object.fromEntries(
      Object.entries(personal).filter(([_, v]) => v != null && v !== "")
    );

    const account = {
      nomor_rekening: data.nomor_rekening,
      nama_pemilik_rekening: data.nama_pemilik_rekening,
      nama_bank: data.nama_bank,
      nama_ibu_kandung: data.nama_ibu_kandung,
      nama_rekening_custodian: data.nama_rekening_custodian,
      nomor_rekening_custodian: data.nomor_rekening_custodian,
    };

    const document = new FormData();
    document.append("ktp", data.ktp);
    document.append("swa_photo", data.swa_photo);
    if (data.slip_gaji) {
      document.append("slip_gaji", data.slip_gaji);
    }
    try {
      const responsePersonal = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/pemodal/${pemodal_id}?_method=PUT`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cleanPersonal),
        }
      );
      if (responsePersonal.ok) {
        const result = await responsePersonal.json();
        console.log("Form submitted successfully:", result);
      } else {
        const errorData = await responsePersonal.json();
        console.error("Form submission failed", errorData);
      }

      const responseAccount = await postProtectedData(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/pemodal-akunbank`,
        account
      );
      if (responseAccount) {
        console.log("Form submitted successfully:", responseAccount);
      } else {
        console.error("Form submission failed");
      }

      const responseDocument = await postProtectedData(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/pemodal-berkas`,
        document
      );
      if (responseDocument) {
        console.log("Form submitted successfully:", responseDocument);
      } else {
        console.error("Form submission failed");
      }

      reset();
    } catch (error) {
      console.error("Error during form submission:", error);
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

  const handleFaceCaptured = (image: File) => {
    setFaceImage(image);
    setValue("swa_photo", image);
    next();
  };

  const handleKtpCaptured = (image: File) => {
    setKtpImage(image);
    setValue("ktp", image);
    next();
  };

  const StepComponent = steps[currentStep].component;

  return (
    <section className="mx-auto flex w-full flex-col my-2">
      {/* Steps */}
      {currentStep < 4 && (
        <header
          className={`w-full flex justify-between items-center my-8 lg:my-10`}
        >
          <img
            className="w-14 h-14"
            src="/icons/fulusme.svg"
            alt="Fulusme Icon"
          />
          <ol className="w-1/2 mx-auto hidden lg:flex justify-between items-center relative">
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
                    className="w-2 h-2 lg:w-4 lg:h-4"
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
                      className={`hidden lg:block absolute left-1/2 top-1/2 transform -translate-y-1/2 w-full h-1 ${
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
        <div
          key={currentStep}
          className="w-full lg:w-1/2 mx-auto text-sky"
          // initial={{ x: delta >= 0 ? 50 : -50, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.3, ease: "easeInOut" }}
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
        </div>
      </form>
      <div
        className={`flex w-1/2 mx-auto  ${
          (currentStep === 0 || currentStep === 1 || currentStep === 4) &&
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

export default KYCPemodalForm;
