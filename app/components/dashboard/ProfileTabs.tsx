"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountInfoTab } from "./AccountInfoTab";

const ProfileTabs = () => {
  return (
    <Tabs defaultValue="account-info">
      <TabsList>
        <TabsTrigger value="account-info">Account Info</TabsTrigger>
        {/* Add other tab triggers here */}
      </TabsList>
      <TabsContent value="account-info">
        <AccountInfoTab />
      </TabsContent>
      {/* Add other tab contents here */}
    </Tabs>
  );
};

export default ProfileTabs;
