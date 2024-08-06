// import { Progress } from "@/components/ui/progress";
// import Link from "next/link";

// interface TypeProps {
//   type: string;
// }

// const BusinessCard: React.FC<TypeProps> = ({ type }) => {
//   const progressValue = type === "1" || type === "2" ? 100 : 65;
//   return (
//     <Link href="/daftar-investasi">
//       <section className="bg-[#f8f8ff] rounded-xl max-w-80 2xl:max-w-[350px]">
//         <div className="relative">
//           <img
//             className="w-full rounded-t-xl"
//             src="/images/kentang.png"
//             alt="Product"
//           />
//           {type === "1" || type === "2" || type === "3" ? (
//             <>
//               <div
//                 className={`absolute inset-0 ${
//                   type === "1"
//                     ? "bg-emerald-light"
//                     : type === "2"
//                     ? "bg-sky"
//                     : type === "3"
//                     ? "bg-orange-400"
//                     : ""
//                 } opacity-80 rounded-t-xl`}
//               ></div>
//               <div className="absolute inset-0 flex justify-center items-center">
//                 <span className="w-2/3   text-white text-center border-2 border-white rounded-xl font-bold">
//                   {type === "1"
//                     ? "Pendanaan Terpenuhi"
//                     : type === "2"
//                     ? "Proyek Berakhir"
//                     : type === "3"
//                     ? "Segera Terbit"
//                     : ""}
//                 </span>
//               </div>
//             </>
//           ) : null}
//         </div>
//         <section className="w-11/12 mx-auto my-4 flex flex-col gap-3">
//           <section className="flex justify-start items-center text-xs text-white font-bold">
//             <button className="bg-emerald-light px-7 py-1.5 rounded-l-md">
//               Sukuk
//             </button>
//             <button className="bg-sky px-7 py-1.5 rounded-r-md">
//               {type === "1" || type === "2" ? "0 Lagi" : "24 Hari lagi"}
//             </button>
//           </section>
//           <h2 className="font-bold text-left text-sm">
//             Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan
//           </h2>
//           <section className="text-sm text-left">
//             <h3>PT. Amsak Bangun Persada</h3>
//             <p>
//               <span className="font-bold">Kode Efek</span> ABPP1
//             </p>
//           </section>
//           <section className="text-sm text-left">
//             <h3>Kebutuhan Pendanaan</h3>
//             <h4 className="font-bold">Rp 302.050.000</h4>
//           </section>
//           <section className="text-sm text-left">
//             <h3>Efek Tersedia</h3>
//             <h4 className="font-bold">
//               {type === "1" || type === "2" ? "-" : "3000"}
//             </h4>
//           </section>
//           <section className="text-sm text-left">
//             <h3>Dana Terkumpul</h3>
//           </section>
//           <Progress value={progressValue} type={type} />
//           <section className="flex justify-between">
//             <p>
//               {type === "1" || type === "2" ? "400.000.000" : "225.000.000"}
//             </p>
//             <p>{type === "1" || type === "2" ? "100%" : "65%"}</p>
//           </section>
//           <section className="text-sm text-left mb-4">
//             <h3>Sisa Dana yang Dibutuhkan</h3>
//             <h4 className="font-bold">
//               {type === "1" || type === "2" ? "Rp 0" : "Rp 175.000.000"}
//             </h4>
//           </section>
//         </section>
//       </section>
//     </Link>
//   );
// };

// export default BusinessCard;
