import dynamic from "next/dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar | FULUSME",
  description: "Segera Daftar dan Berinvestasi di FULUSME",
};

const Form = dynamic(
  () => {
    return import("../../components/Form");
  },
  { ssr: false }
);

export default async function DaftarPemodal() {
  return (
    <main>
      <Form />
    </main>
  );
}
