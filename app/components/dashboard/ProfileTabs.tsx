"use client";

import { useUser } from "@/context/UserContext";
import { CircleCheckBig, Download, SquarePen } from "lucide-react";
import { useState } from "react";

interface Profile {
  nama_depan: string;
  nama_belakang: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  no_handphone: string;
  no_ktp: string;
  no_npwp: string | null;
  no_sid: string | null;
  agama: string;
  kewarganegaraan: string;
  alamat_ktp: string;
  kelurahan_ktp: string | null;
  kecamatan_ktp: string | null;
  kabupaten_ktp: string | null;
  provinsi_ktp: string | null;
  alamat_domisili: string | null;
  kelurahan_domisili: string | null;
  kecamatan_domisili: string | null;
  kabupaten_domisili: string | null;
  provinsi_domisili: string | null;
  pendidikan: string;
  pekerjaan: string;
  industri_pekerjaan: string;
  pendapatan: string;
  sumber_pendapatan: string;
  status_id: number;
  status: string;
  nomor_rekening: string;
  nama_pemilik_rekening: string;
  nama_bank: string | null;
  kabupaten_cabang_bank: string | null;
  ktp: string;
  npwp: string;
  swa_photo: string;
  slip_gaji: string;
  kartu_keluarga: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  user_type: string;
  pemodal_id: number;
  pemodal_status: number;
  pemodal_status_description: string;
  profile: Profile[];
}

interface ProfileTabsProps {
  data: User;
}

const ProfileTabs: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full bg-white mx-auto p-8 border rounded-xl">
      <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-8 my-4">
        <img
          className="w-16 h-16 rounded-full"
          src={`https://oms-api-dev.khalifahdev.biz.id/api/public/file/${user?.profile.swa_photo}`}
          alt="Profile"
        />
        <div className="text-center md:text-left text-xl">
          <h2 className="font-bold">
            {user?.profile.nama_depan + " " + user?.profile.nama_belakang}
          </h2>
          <span
            className={`${
              user?.pemodal_status === 3
                ? "text-emerald-light"
                : "text-[#E09400]"
            } flex items-center justify-center md:justify-start gap-2`}
          >
            {user?.pemodal_status === 3 && <CircleCheckBig />}
            {user?.pemodal_status === 3
              ? "Terverifikasi"
              : "Belum Terverifikasi"}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {["Akun", "Alamat", "Pekerjaan", "Dokumen", "Akun Bank"].map(
          (tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 md:px-10 ${
                activeTab === index
                  ? "bg-emerald-light text-white rounded-3xl"
                  : "text-black bg-[#ECF0FF] rounded-3xl"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </button>
          )
        )}
      </div>
      <div className="space-y-4 mt-4">
        {activeTab === 0 && (
          <>
            <div className="my-8 divide-y-2">
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Email</label> <br />
                  <span className="text-sm">{user?.email}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Nomor Handphone</label> <br />
                  <span className="text-sm">{user?.profile.no_handphone}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Password</label> <br />
                  <span className="text-sm">**********</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="py-4">
                <button className="w-full text-start font-bold block border p-2 rounded-lg bg-[#ECF0FF]">
                  <Download className="inline mx-2" strokeWidth={2} /> Dokumen
                  Perjanjian
                </button>
              </div>
            </div>
            <div className="py-12 flex justify-end">
              <button className="px-6 py-3 flex items-center gap-2 rounded-xl bg-emerald-light text-white">
                <img src="/icons/save.svg" alt="Save Icon" />
                Simpan
              </button>
            </div>
          </>
        )}
        {activeTab === 1 && (
          <div>
            <div className="my-8 divide-y-2">
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Alamat KTP</label> <br />
                  <span className="text-sm">{user?.profile.alamat_ktp}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Kelurahan KTP</label> <br />
                  <span className="text-sm">{user?.profile.kelurahan_ktp}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Kecamatan KTP</label> <br />
                  <span className="text-sm">{user?.profile.kecamatan_ktp}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Kabupaten KTP</label> <br />
                  <span className="text-sm">{user?.profile.kabupaten_ktp}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Provinsi KTP</label> <br />
                  <span className="text-sm">{user?.profile.provinsi_ktp}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <div className="my-8 divide-y-2">
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Pekerjaan</label> <br />
                  <span className="text-sm">{user?.profile.pekerjaan}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Industri Pekerjaan</label> <br />
                  <span className="text-sm">
                    {user?.profile.industri_pekerjaan}
                  </span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Pendapatan</label> <br />
                  <span className="text-sm">{user?.profile.pendapatan}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <div className="my-8 divide-y-2">
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">KTP</label> <br />
                  <span className="text-sm">{user?.profile.ktp}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">NPWP</label> <br />
                  <span className="text-sm">{user?.profile.npwp}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Slip Gaji</label> <br />
                  <span className="text-sm">{user?.profile.slip_gaji}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Kartu Keluarga</label> <br />
                  <span className="text-sm">
                    {user?.profile.kartu_keluarga}
                  </span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
            </div>
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <div className="my-8 divide-y-2">
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Nomor Rekening</label> <br />
                  <span className="text-sm">
                    {user?.profile.nomor_rekening}
                  </span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Nama Bank</label> <br />
                  <span className="text-sm">{user?.profile.nama_bank}</span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Nama Pemilik Rekening</label>{" "}
                  <br />
                  <span className="text-sm">
                    {user?.profile.nama_pemilik_rekening}
                  </span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Nomor Rekening Custodian</label>{" "}
                  <br />
                  <span className="text-sm">
                    {/* {data.nomor_rekening_custodian} */}
                  </span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Nama Rekening Custodian</label>{" "}
                  <br />
                  <span className="text-sm">
                    {/* {data.nama_rekening_custodiang} */}
                  </span>
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;
