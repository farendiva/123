"use client";

import { useUser } from "@/context/UserContext";
import { CircleCheckBig, Download, Save, SquarePen } from "lucide-react";
import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useUser();

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full bg-white mx-auto p-8 border rounded-xl">
      <div className="flex items-center w-full gap-8 my-4">
        <img
          className="w-16 h-16 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div className="text-xl">
          <h2 className="font-bold">{user?.name}</h2>
          <span className="text-emerald-light flex items-center gap-2">
            <CircleCheckBig />
            Terverifikasi
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        {["Akun", "Alamat", "Pekerjaan", "Dokumen", "Akun Bank"].map(
          (tab, index) => (
            <button
              key={index}
              className={`py-2 px-10 ${
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
      <div className="space-y-4">
        {activeTab === 0 && (
          <>
            <div className="my-8 divide-y-2">
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Email</label> <br />
                  <input
                    type="text"
                    placeholder="sncg.sn@gmail.com"
                    className="placeholder:text-black text-sm"
                  />
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Nomor Handphone</label> <br />
                  <input
                    type="text"
                    placeholder="6281266695495"
                    className="placeholder:text-black text-sm"
                  />
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Email</label> <br />
                  <input
                    type="password"
                    placeholder="**********"
                    className="placeholder:text-black text-sm"
                  />
                </div>
                <SquarePen strokeWidth={1.5} />
              </div>
              <div className="py-4">
                <button className="w-full text-start font-bold block border p-2  rounded-lg bg-[#ECF0FF;]">
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
        {activeTab === 1 && <div>Alamat Content</div>}
        {activeTab === 2 && <div>Pekerjaan Content</div>}
        {activeTab === 3 && <div>Dokumen Content</div>}
        {activeTab === 4 && <div>Akun Bank Content</div>}
      </div>
    </div>
  );
};

export default ProfilePage;
