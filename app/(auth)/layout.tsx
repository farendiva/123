import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import GoogleCaptchaWrapper from "../GoogleCaptchaWrapper";

export const metadata: Metadata = {
  title: "Masuk | FULUSME",
  description: "Segera Masuk dan Berinvestasi di FULUSME",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` w-11/12 mx-auto`}>
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        <Toaster />
      </body>
    </html>
  );
}
