"use client";

import dynamic from "next/dynamic";
const KYCPemodalForm = dynamic(
  () => import("@/app/components/form/KYCPemodalForm"),
  {
    ssr: false,
  }
);
import CaptureFace from "@/app/components/CaptureFace";
import CaptureKTP from "@/app/components/CaptureKTP";
import APUForm, { APUFields } from "@/app/components/form/APUForm";
import Completion from "@/app/components/form/Completion";
import IncomeForm, { incomeFields } from "@/app/components/form/IncomeForm";
import PersonalInfoForm, {
  personalInfoFields,
} from "@/app/components/form/PersonalInforForm";

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
    component: PersonalInfoForm,
  },
  {
    id: "Step 4",
    name: "Penghasilan",
    fields: incomeFields,
    component: IncomeForm,
  },
  // {
  //   id: "Step 5",
  //   name: "APU PPT",
  //   fields: APUFields,
  //   component: APUForm,
  // },
  {
    id: "Step 5",
    name: "Completed",
    component: Completion,
  },
];

const KYCPemodalPage = (props: Props) => {
  return (
    <main className="mx-auto">
      <KYCPemodalForm steps={steps} />
    </main>
  );
};

export default KYCPemodalPage;
