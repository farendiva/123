import ListingGrid from "@/app/components/ListingGrid";
import { getListing } from "@/lib/listing";

export default async function DaftarBisnis() {
  const listing = await getListing();
  return (
    <main>
      {listing ? (
        <ListingGrid listings={listing} />
      ) : (
        <h1 className="text-center font-bold">Bisnis Tidak ditemukan</h1>
      )}
    </main>
  );
}

export const revalidate = 60; // Revalidate every 60 seconds
