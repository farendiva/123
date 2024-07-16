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

const ListingCard: React.FC<ListingCardProps> = ({ project }) => {
  return (
    <Link
      href={`/daftar-bisnis/${project.jenis_efek.toLowerCase()}/${
        project.idlisting
      }`}
    >
      <section className="bg-[#f8f8ff] rounded-xl max-w-full sm:max-w-80 2xl:max-w-[350px] h-[635px]">
        <img
          className="w-full aspect-video rounded-t-xl"
          src={`https://oms-api-dev.khalifahdev.biz.id/api/public/file/${project.nama_file}`}
          alt={project.nama_efek}
        />
        <section className="w-11/12 mx-auto my-4 flex flex-col gap-3">
          <section className="flex justify-start items-center text-xs text-white font-bold">
            <button
              className={`${
                project.jenis_efek === "Sukuk" ? "bg-emerald-light" : "bg-sky"
              } px-7 py-1.5 rounded-l-md`}
            >
              {project.jenis_efek}
            </button>
            <button className="bg-sky px-7 py-1.5 rounded-r-md">
              {project.periode_penawaran_efek} Hari lagi
            </button>
          </section>
          <h2 className="font-bold text-left text-sm">{project.nama_efek}</h2>
          <section className="text-sm text-left">
            <h3>{project.nama_penerbit}</h3>
            <p>
              <span className="font-bold">Kode Efek</span>{" "}
              {project.kode_penerbit}
            </p>
          </section>
          <section className="text-sm text-left">
            <h3>Kebutuhan Pendanaan</h3>
            <h4 className="font-bold">
              {formatRupiah(project.nilai_pendanaan)}
            </h4>
          </section>
          <section className="text-sm text-left">
            <h3>Efek Tersedia</h3>
            <h4 className="font-bold">{project.jumlah_unit_yang_ditawarkan}</h4>
          </section>
          <section className="text-sm text-left">
            <h3>Dana Terkumpul</h3>
          </section>
          <Progress
            value={Math.floor(
              (project.nilai_pendanaan / project.nilai_proyek) * 100
            )}
            type="0"
            className=""
          />
          <section className="flex justify-between">
            <p> {formatRupiah(project.nilai_pendanaan)}</p>
            <p>
              {isNaN(project.nilai_pendanaan / project.nilai_proyek)
                ? "0%"
                : `${Math.floor(
                    (project.nilai_pendanaan / project.nilai_proyek) * 100
                  )}%`}
            </p>
          </section>

          <section className="text-sm text-left mb-4">
            <h3>Sisa Dana yang Dibutuhkan</h3>
            <h4 className="font-bold">
              {formatRupiah(
                Math.max(project.nilai_proyek - project.nilai_pendanaan, 0)
              )}
            </h4>
          </section>
        </section>
      </section>
    </Link>
  );
};

export default ListingCard;
