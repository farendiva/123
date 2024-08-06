import { Progress } from "@/components/ui/progress";
import { formatRupiah } from "@/lib/rupiah";
import Link from "next/link";

interface Project {
  penerbit_id: number;
  kode_penerbit: string;
  jenis_efek: string;
  nama_efek: string;
  nama_proyek: string;
  tentang_proyek: string | null;
  dasar_penerbitan: string;
  nilai_proyek: number;
  nilai_modal: number;
  nilai_pendanaan: number;
  minimal_pendanaan: number;
  periode_penawaran_efek: number;
  porsi_modal_pemodal: number | null;
  porsi_modal_penerbit: number | null;
  proyeksi_bagi_hasil_min: number | null;
  proyeksi_bagi_hasil_max: number | null;
  skema_pembayaran: string;
  pihak_terlibat: string;
  minimal_investasi: number;
  jumlah_unit_yang_ditawarkan: number;
  tenor_dividen: number;
  satuan_pemindahan_buku: number;
  denda_keterlambatan: string | null;
  jaminan: string | null;
  monitoring_pembayaran: string;
  akad: number;
  bidang_usaha: number;
  nama_file: string;
  nama_penerbit: string;
  idlisting: number;
}

interface ListingCardProps {
  project: Project;
}

const formatTitleForUrl = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const ListingCard: React.FC<ListingCardProps> = ({ project }) => {
  const formattedNamaEfek = formatTitleForUrl(project.nama_efek);

  return (
    <Link
      href={`/daftar-bisnis/${project.jenis_efek.toLowerCase()}/${formattedNamaEfek}-${
        project.idlisting
      }`}
    >
      <section className="bg-[#f8f8ff] space-y-4 rounded-xl max-w-[305px] h-[400px] relative">
        <img
          className="w-full h-2/5 aspect-video rounded-t-xl"
          src={`${process.env.NEXT_PUBLIC_FILE_PATH}/images/${project.nama_file}`}
          alt={project.nama_efek}
        />
        {/* <div className="relative">
          <img
            className="w-full h-2/5 aspect-video rounded-t-xl"
            src={`${process.env.NEXT_PUBLIC_FILE_PATH}/images/${project.nama_file}`}
            alt={project.nama_efek}
          />
          {project.kampanye.status !== 2 ? (
            <>
              <div
                className={`absolute inset-0 ${
                  project.kampanye.status === 1
                    ? "bg-orange-400"
                    : project.kampanye.status === 3 ||
                      project.kampanye.status === 4 ||
                      project.kampanye.status === 5
                    ? "bg-emerald-light"
                    : project.kampanye.status === 6 ||
                      project.kampanye.status === 7
                    ? "bg-sky"
                    : ""
                } opacity-80 rounded-t-xl`}
              ></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <span className="w-2/3 text-white text-center border-2 border-white rounded-xl font-bold">
                  {project.kampanye.status === 1
                    ? "Segera Terbit"
                    : project.kampanye.status === 3 ||
                      project.kampanye.status === 4 ||
                      project.kampanye.status === 5
                    ? "Pendanaan Terpenuhi"
                    : project.kampanye.status === 6 ||
                      project.kampanye.status === 7
                    ? "Proyek Berakhir"
                    : ""}
                </span>
              </div>
            </>
          ) : null}
        </div> */}
        <div className="absolute text-[10px] top-0 right-0 bg-opacity-70 px-3 flex items-center gap-2">
          <button
            className={`${
              project.jenis_efek === "Sukuk"
                ? "bg-[#FF1F00]"
                : "bg-emerald-light"
            } text-white px-3 py-1 z-10 rounded-5xl`}
          >
            {project.jenis_efek === "Sukuk"
              ? project.akad === 1
                ? "Sukuk Mudharabah"
                : "Sukuk Musyarakah"
              : "Saham"}
          </button>
          <button className="bg-sky -ml-6 px-5 py-1 rounded-5xl text-white">
            {project.periode_penawaran_efek} Hari lagi
          </button>
        </div>

        <section className="w-11/12 mx-auto my-4 px-1">
          <section className="max-h-20 h-14 flex justify-start items-center">
            <h2 className="font-bold text-left text-sm">{project.nama_efek}</h2>
          </section>
        </section>
        <section className="space-y-1.5 px-1">
          <section className="w-11/12 mx-auto text-xs flex justify-between items-center font-bold">
            <h3>Dana Terkumpul</h3>
            <h3>Rp 0</h3>
          </section>
          <Progress
            // value={Math.floor(
            //   (project.nilai_pendanaan / project.nilai_proyek) * 100
            // )}
            value={0}
            type={0}
            className="w-11/12 mx-auto"
          />
          <section className="w-11/12 mx-auto flex text-xs  justify-between items-center">
            <h3>Kebutuhan Modal</h3>
            <h4 className="">{formatRupiah(project.nilai_pendanaan)}</h4>
          </section>
          <section className="w-11/12 mx-auto flex text-xs  justify-between items-center">
            <h3>Minimal Investasi</h3>
            <h4 className="">{formatRupiah(project.minimal_investasi)}</h4>
          </section>
          <section className="w-11/12 mx-auto flex text-xs  justify-between items-center">
            <h3>
              {" "}
              {project.jenis_efek === "Sukuk"
                ? "Jangka Waktu"
                : "Periode Dividen"}
            </h3>
            <h4 className="">{project.tenor_dividen} Bulan</h4>
          </section>
          <section className="w-11/12 mx-auto flex text-xs  justify-between items-center">
            <h3>Proyeksi ROI</h3>
            <h4 className="">
              {project.proyeksi_bagi_hasil_min}% -{" "}
              {project.proyeksi_bagi_hasil_max}%
            </h4>
          </section>
        </section>
      </section>
    </Link>
  );
};

export default ListingCard;
