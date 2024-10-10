"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountInfoTab } from "./AccountInfoTab";
import { JobTab } from "./JobTab";
import { BankTab } from "./BankTab";
import { AddressTab } from "./AddressTab";
import DocumentFormTab from "./DocumentFormTab";
import { useUser } from "@/context/UserContext";
import { CircleCheckBig } from "lucide-react";

const ProfileTabs = () => {
  const { user } = useUser();

  const getProfileImage = (user: any): string => {
    if (user?.profile?.swa_photo) {
      return `${process.env.NEXT_PUBLIC_FILE_PATH}/images/${user?.profile?.swa_photo}`;
    }
    return "/images/profile-placeholder.jpg";
  };

  return (
    <main className="w-full bg-white mx-auto p-8 border rounded-xl">
      <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-8 my-4 px-4">
        <img
          className="w-16 h-16 rounded-full"
          src={getProfileImage(user)}
          alt="Profile"
        />
        <div className="text-center md:text-left text-xl">
          <h2 className="font-bold">
            {user?.profile?.nama_depan + " " + user?.profile?.nama_belakang}
          </h2>
          <span
            className={`${
              user?.pemodal_status === 3
                ? "text-emerald-light"
                : user?.pemodal_status === 4
                ? "text-red-500"
                : "text-[#E09400]"
            } flex font-semibold items-center justify-center md:justify-start gap-2`}
          >
            {user?.pemodal_status === 3 && <CircleCheckBig />}
            {user?.pemodal_status === 3
              ? "Terverifikasi"
              : user?.pemodal_status === 1
              ? "Menunggu Review"
              : user?.pemodal_status === 4
              ? "Tidak Terverifikasi"
              : "Lengkapi Identitas"}
          </span>
        </div>
      </div>
      <Tabs defaultValue="account-info">
        <TabsList className="w-full px-4 flex gap-4 justify-between items-center mx-auto rounded-5xl bg-transparent">
          <TabsTrigger
            className="w-full border-none rounded-5xl bg-slate-100 data-[state=active]:bg-emerald p-3"
            value="account-info"
          >
            Akun{" "}
          </TabsTrigger>
          <TabsTrigger
            className="w-full border-none rounded-5xl bg-slate-100 data-[state=active]:bg-emerald p-3"
            value="address"
          >
            Alamat
          </TabsTrigger>
          <TabsTrigger
            className="w-full border-none rounded-5xl bg-slate-100 data-[state=active]:bg-emerald p-3"
            value="job"
          >
            Pekerjaan
          </TabsTrigger>
          <TabsTrigger
            className="w-full border-none rounded-5xl bg-slate-100 data-[state=active]:bg-emerald p-3"
            value="document"
          >
            Dokumen
          </TabsTrigger>
          <TabsTrigger
            className="w-full border-none rounded-5xl bg-slate-100 data-[state=active]:bg-emerald p-3"
            value="bank"
          >
            Akun Bank
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account-info">
          <AccountInfoTab />
        </TabsContent>
        <TabsContent value="address">
          <AddressTab />
        </TabsContent>
        <TabsContent value="job">
          <JobTab />
        </TabsContent>
        <TabsContent value="document">
          <DocumentFormTab />
        </TabsContent>
        <TabsContent value="bank">
          <BankTab />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ProfileTabs;
