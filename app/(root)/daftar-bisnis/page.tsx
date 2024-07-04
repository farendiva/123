import BusinessCard from "@/app/components/BusinessCard";

export default async function DaftarBisnis() {
  return (
    <main>
      <section className="w-11/12 mx-auto flex flex-col justify-center items-center gap-y-8 md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-4 my-8">
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </section>
    </main>
  );
}
