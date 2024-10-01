"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountInfoTab } from "./AccountInfoTab";
import { JobTab } from "./JobTab";
import { BankTab } from "./BankTab";

const ProfileTabs = () => {
  return (
    <Tabs defaultValue="account-info">
      <TabsList>
        <TabsTrigger value="account-info">Account Info</TabsTrigger>
        <TabsTrigger value="job">Pekerjaan</TabsTrigger>
        <TabsTrigger value="bank">Bank</TabsTrigger>
      </TabsList>
      <TabsContent value="account-info">
        <AccountInfoTab />
      </TabsContent>
      <TabsContent value="job">
        <JobTab />
      </TabsContent>
      <TabsContent value="bank">
        <BankTab />
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;
