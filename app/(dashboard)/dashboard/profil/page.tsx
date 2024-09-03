import ProfileTabs from "@/app/components/dashboard/ProfileTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil",
  description: "Profile Pemodal FULUSME",
};
export default async function ProfilePage() {
  return (
    <main className="w-full mx-auto rounded-xl">
      <ProfileTabs />
    </main>
  );
}
