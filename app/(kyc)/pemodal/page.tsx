"use client";

import dynamic from "next/dynamic";
import CaptureFace from "@/app/components/CaptureFace";
import CaptureKTP from "@/app/components/CaptureKTP";
const KycFormNew = dynamic(() => import("@/app/components/KycNew"), {
  ssr: false,
});
import APUForm from "@/app/components/form/APUForm";
import Completion from "@/app/components/form/Completion";
import IncomeForm, { incomeFields } from "@/app/components/form/IncomeForm";
import PersonalInfoForm, {
  personalInfoFields,
} from "@/app/components/form/PersonalInforForm";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthToken from "@/hooks/useAuthToken";

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
    fields: ["ktpImage"],
    component: CaptureKTP,
  },
  {
    id: "Step 3",
    name: "Data Diri",
    fields: personalInfoFields,
    component: PersonalInfoForm,
  },
  {
    id: "Step 4",
    name: "Penghasilan",
    fields: incomeFields,
    component: IncomeForm,
  },
  {
    id: "Step 5",
    name: "APU PPT",
    component: APUForm,
  },
  {
    id: "Step 6",
    name: "Completed",
    component: Completion,
  },
];

const KYCPemodalPage = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    const token = useAuthToken();
    if (!token) {
      router.push("/masuk");
    }
  }, [router]);

  return (
    <main className="mx-auto">
      <KycFormNew steps={steps} />
    </main>
  );
};

export default KYCPemodalPage;
