// import PortfolioList from "@/app/components/dashboard/PortfolioList";
// import { getPortfolios } from "@/lib/listing";
// import { cookies } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Pemodal FULUSME",
};
export default async function PortfolioPage() {
  // const cookieStore = cookies();
  // const token = cookieStore.get("authToken")?.value;
  // const { data } = await getPortfolios(token as string);
  return (
    <main className="w-full mx-auto rounded-xl">
      {/* <PortfolioList data={data.data} /> */}
    </main>
  );
}
