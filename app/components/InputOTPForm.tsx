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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <h1 className="text-3xl text-sky-900 font-bold">
                Masukkan Kode OTP
              </h1>
              <p className="text-sky-900">
                Kode OTP telah dikirimkan ke nomor +6123456789
              </p>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="bg-gray-100">
                    <InputOTPSlot index={0} className="w-16 h-16" />
                    <InputOTPSlot index={1} className="w-16 h-16" />
                    <InputOTPSlot index={2} className="w-16 h-16" />
                    <InputOTPSlot index={3} className="w-16 h-16" />
                    <InputOTPSlot index={4} className="w-16 h-16" />
                    <InputOTPSlot index={5} className="w-16 h-16" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>00:35, tidak mendapatkan kode?</FormDescription>
              <FormDescription className="font-bold text-sky-900">
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
