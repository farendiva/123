"use client";

import dynamic from "next/dynamic";
import CaptureFace from "@/app/components/CaptureFace";
import CaptureKTP from "@/app/components/CaptureKTP";
const KYCPenerbitForm = dynamic(
  () => import("@/app/components/form/KYCPenerbitForm"),
  {
    ssr: false,
  }
);
import APUForm, { APUFields } from "@/app/components/form/APUForm";
import Completion from "@/app/components/form/Completion";
import PersonalFormPenerbit, {
  personalInfoFields,
} from "@/app/components/form/PersonalFormPenerbit";

import PerusahaanForm, {
  perusahaanFields,
} from "@/app/components/form/PerusahaanForm";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthToken } from "@/hooks/useAuthToken";
import DetailPerusahaanForm, {
  detailPerusahaanFields,
} from "@/app/components/form/DetailPerusahaanForm";

type Props = {};

const steps = [
  {
    id: "Step 1",
    name: "Capture Face",
    fields: ["faceImage"],
    component: CaptureFace,
  },
  {
    id: "Step 2",
    name: "Capture KTP",
    fields: ["ktpImage", "no_ktp"],
    component: CaptureKTP,
  },
  {
    id: "Step 3",
    name: "Data Diri",
    fields: personalInfoFields,
    component: PersonalFormPenerbit,
  },
  {
    id: "Step 4",
    name: "Data Perusahaan",
    fields: perusahaanFields,
    component: PerusahaanForm,
  },
  {
    id: "Step 5",
    name: "Detail Perusahaan",
    fields: detailPerusahaanFields,
    component: DetailPerusahaanForm,
  },
  {
    id: "Step 6",
    name: "APU PPT",
    fields: APUFields,
    component: APUForm,
  },
  {
    id: "Step 7",
    name: "Completed",
    component: Completion,
  },
];

const KYCPenerbitPage = (props: Props) => {
  const router = useRouter();
  const token = useAuthToken();

  useEffect(() => {
    if (!token) {
      router.push("/masuk");
    }
  }, [router, token]);

  return (
    <main className="mx-auto">
      <KYCPenerbitForm steps={steps} />
    </main>
  );
};

export default KYCPenerbitPage;
