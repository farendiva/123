import dynamic from "next/dynamic";

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
