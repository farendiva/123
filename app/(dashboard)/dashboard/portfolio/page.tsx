import PortfolioList from "@/app/components/dashboard/PortfolioList";
import { getPortfolios } from "@/lib/listing";
import { cookies } from "next/headers";

export default async function PortfolioPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;
  const { data } = await getPortfolios(token as string);
  return (
    <main className="w-full mx-auto rounded-xl">
      <PortfolioList data={data.data} />
    </main>
  );
}
