import { Progress } from "@/components/ui/progress";

const BusinessCard = () => {
  return (
    <section className="bg-[#f8f8ff] rounded-xl max-w-72">
      <img className="" src="/images/kentang.png" alt="Product" />
      <section className="w-11/12 mx-auto my-4 flex flex-col gap-3">
        <section className="flex justify-start items-center text-xs text-white font-bold">
          <button className="bg-emerald-light px-7 py-1.5 rounded-l-md">
            Saham
          </button>
          <button className="bg-sky px-7 py-1.5 rounded-r-md">
            24 Hari lagi
          </button>
        </section>
        <h2 className="font-bold text-left text-sm">
          Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan
        </h2>
        <section className="text-sm text-left">
          <h3>PT.Fulusme Sejahtera</h3>
          <p>
            <span className="font-bold">Kode Efek</span> ABPP1
          </p>
        </section>
        <section className="text-sm text-left">
          <h3>Kebutuhan Pendanaan</h3>
          <h4 className="font-bold">Rp 400.000.000</h4>
        </section>
        <Progress value={33} className="" />
        <section className="flex justify-between">
          <p>Rp. 1.551.000.000</p>
          <p>65%</p>
        </section>
      </section>
    </section>
  );
};

export default BusinessCard;
