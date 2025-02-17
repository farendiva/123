"use client";

import { ChangeEvent, Suspense, useState } from "react";
import { z } from "zod";
import { KycPenerbitFormSchema } from "../../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import useFetchProtectedData from "@/lib/fetchProtectedData";

type Inputs = z.infer<typeof KycPenerbitFormSchema>;

interface Step {
  id: string;
  name: string;
  fields?: string[];
  component: React.ComponentType<any>;
}

interface StepProps {
  steps: Step[];
}

const KYCPenerbitForm: React.FC<StepProps> = ({ steps }) => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [faceImage, setFaceImage] = useState<File | null>(null);
  const [ktpImage, setKtpImage] = useState<File | null>(null);
  const { postProtectedData } = useFetchProtectedData();
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
    resolver: zodResolver(KycPenerbitFormSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const perusahaan = {
      nama: data.nama_perusahaan,
      jenis_perusahaan: data.jenis_perusahaan,
      situs_perusahaan: data.situs_perusahaan,
      no_telp: data.no_telp_perusahaan,
      alamat: data.alamat_perusahaan,
      no_rekening: data.nomor_rekening_perusahaan,
      nama_rekening: data.nama_rekening_perusahaan,
      bank_rekening: data.nama_bank_rekening,
      provinsi: data.provinsi_perusahaan,
      kota: data.kota_perusahaan,
      kecamatan: data.kecamatan_perusahaan,
      kelurahan: data.kecamatan_perusahaan,
      kodepos: data.kodePos_perusahaan,
      status: 1,
    };

    const personal = {
      nama_depan: data.nama_depan,
      nama_belakang: data.nama_belakang,
      email: "",
      no_ktp: data.no_ktp,
      no_hp: data.no_handphone,
      tempat_lahir: data.tempat_lahir,
      tanggal_lahir: data.tanggal_lahir,
      agama: data.agama,
      kewarganegaraan: data.kewarganegaraan,
      pendidikan_terakhir: data.pendidikan_terakhir,
      pekerjaan: data.posisi,
      alamat_ktp: data.alamat_ktp,
      kelurahan_ktp: data.kelurahan_ktp,
      kecamatan_ktp: data.kecamatan_ktp,
      kabupaten_ktp: data.kabupaten_ktp,
      provinsi_ktp: data.provinsi_ktp,
      alamat_domisili: data.alamat_domisili,
      kelurahan_domisili: data.kelurahan_domisili,
      kecamatan_domisili: data.kecamatan_domisili,
      kabupaten_domisili: data.kabupaten_domisili,
      provinsi_domisili: data.provinsi_domisili,
    };

    const document = new FormData();
    document.append("nomor_akta_perusahaan", data.nomor_akta_perusahaan);
    document.append("nomor_npwp_perusahaan", data.nomor_npwp_perusahaan);
    document.append("dokumen_siup", data.dokumen_siup);
    document.append("dokumen_tdp", data.dokumen_tdp);
    document.append(
      "dokumen_profil_perusahaan",
      data.dokumen_profil_perusahaan
    );
    document.append("dokumen_laporan_keuangan", data.dokumen_laporan_keuangan);

    try {
      const responsePerusahaan = await postProtectedData(
        "https://oms-api-dev.khalifahdev.biz.id/api/v1/penerbit",
        perusahaan
      );
      if (responsePerusahaan) {
        console.log("Form submitted successfully:", responsePerusahaan);
      } else {
        console.error("Form submission failed");
      }

      const responseDocument = await postProtectedData(
        "https://oms-api-dev.khalifahdev.biz.id/api/v1/penerbit-berkas",
        document
      );
      if (responseDocument) {
        console.log("Form submitted successfully:", responseDocument);
      } else {
        console.error("Form submission failed");
      }

      const responsePersonal = await postProtectedData(
        "https://oms-api-dev.khalifahdev.biz.id/api/v1/penerbit-perwakilan",
        personal
      );
      if (responsePersonal) {
        console.log("Form submitted successfully:", responsePersonal);
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
      {currentStep < 6 && (
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
          className="w-4/5 lg:w-1/2 mx-auto text-sky"
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
          (currentStep === 0 || currentStep === 1 || currentStep === 6) &&
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

export default KYCPenerbitForm;
