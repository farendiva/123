"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto my-16 text-sky space-y-6"
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Masukkan Kode OTP
              </h1>
              <p className="text-base lg:text-xl">
                Kode OTP telah dikirimkan ke nomor{" "}
                <span className="font-bold">+6123456789</span>
              </p>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="bg-[#f0f2ff]">
                    <InputOTPSlot index={0} className="w-16 h-16" />
                    <InputOTPSlot index={1} className="w-16 h-16" />
                    <InputOTPSlot index={2} className="w-16 h-16" />
                    <InputOTPSlot index={3} className="w-16 h-16" />
                    <InputOTPSlot index={4} className="w-16 h-16" />
                    <InputOTPSlot index={5} className="w-16 h-16" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="text-sky">
                00:35, tidak mendapatkan kode?
              </FormDescription>
              <FormDescription className="font-bold text-sky ">
                Kirim ulang kode OTP
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
