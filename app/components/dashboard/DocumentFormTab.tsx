import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const documentSchema = z.object({
  ktp: z.instanceof(File).optional(),
  slip_gaji: z.instanceof(File).optional(),
});

type DocumentFormData = z.infer<typeof documentSchema>;

export const DocumentFormTab = () => {
  const { user, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DocumentFormData>({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      ktp: undefined,
      slip_gaji: undefined,
    },
  });

  const onSubmit = async (data: DocumentFormData) => {
    if (user) {
      setIsLoading(true);
      try {
        const token = Cookies.get("authToken");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const formData = new FormData();
        if (data.ktp) {
          formData.append("ktp", data.ktp);
        }
        if (data.slip_gaji) {
          formData.append("slip_gaji", data.slip_gaji);
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/pemodal/${user.pemodal_id}/documents?_method=PUT`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update documents");
        }

        updateUser({
          ...user,
          profile: {
            ...user.profile,
            ktp: data.ktp || user.profile.ktp,
            slip_gaji: data.slip_gaji || user.profile.slip_gaji,
          },
        });
        toast({
          title: "Documents Updated",
          description: "Your documents have been successfully updated.",
        });
      } catch (error) {
        console.error("Error updating documents:", error);
        toast({
          title: "Error",
          description: "Failed to update documents. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Upload</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Controller
              name="ktp"
              control={control}
              render={({ field }) => (
                <div>
                  <Label htmlFor="ktp">KTP (ID Card)</Label>
                  <Input
                    id="ktp"
                    type="file"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  {user?.profile?.ktp && (
                    <p className="text-sm text-gray-500 mt-1">
                      Current file uploaded
                    </p>
                  )}
                </div>
              )}
            />
            {errors.ktp && <p className="text-red-500">{errors.ktp.message}</p>}

            <Controller
              name="slip_gaji"
              control={control}
              render={({ field }) => (
                <div>
                  <Label htmlFor="slip_gaji">Slip Gaji (Salary Slip)</Label>
                  <Input
                    id="slip_gaji"
                    type="file"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  {user?.profile?.slip_gaji && (
                    <p className="text-sm text-gray-500 mt-1">
                      Current file uploaded
                    </p>
                  )}
                </div>
              )}
            />
            {errors.slip_gaji && (
              <p className="text-red-500">{errors.slip_gaji.message}</p>
            )}
          </div>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Uploading..." : "Upload Documents"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default DocumentFormTab;
