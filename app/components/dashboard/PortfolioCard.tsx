import React from "react";

interface ItemProps {
  title: string;
  status: string;
  totalSaham: string;
  nilaiInvestasi: string;
  keuntungan: string;
  type: string;
}

const PortfolioCard: React.FC<ItemProps> = ({
  title,
  status,
  totalSaham,
  nilaiInvestasi,
  keuntungan,
  type,
}) => {
  return (
    <div className="h-40 bg-white shadow px-4 rounded-xl flex items-center justify-between gap-4">
      <img
        src="https://images.unsplash.com/photo-1581773551062-654afafb6347?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHV0aWxpdHklMjBwb2xlfGVufDB8fDB8fHww"
        alt={title}
        className="w-1/4 aspect-video rounded-xl"
      />
      <div className="w-full space-y-4">
        <div className="flex justify-between">
          <h3 className="font-bold w-1/2">{title}</h3>
          <span
            className={`h-7 px-6 flex items-center text-xs rounded-xl ${
              type === "Saham" ? "bg-emerald-light" : "bg-sky"
            } text-white`}
          >
            {type}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex-col">
            <h2 className="font-bold">Status</h2>
            <p>{status}</p>
          </div>
          <div className="flex-col">
            <h2 className="font-bold">Total Saham</h2>
            <p>{totalSaham}</p>
          </div>
          <div className="flex-col">
            <h2 className="font-bold">Nilai Investasi</h2>
            <p>{nilaiInvestasi}</p>
          </div>
          <div className="flex-col">
            <h2 className="font-bold">Keuntungan</h2>
            <p className="text-emerald">{keuntungan}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
