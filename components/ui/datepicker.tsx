"use client";

import * as React from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale"; // Import the Indonesian locale

import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  value: string | undefined; // Change type to string to hold formatted date
  onChange: (date: string | undefined) => void;
  bgColor?: string; // Optional bgColor prop
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  bgColor,
}) => {
  const [date, setDate] = React.useState<string | undefined>(value);

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      setDate(formattedDate);
      onChange(formattedDate);
    } else {
      setDate(undefined);
      onChange(undefined);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full px-3 py-6 border-none justify-start text-left font-normal",
            !date && "text-muted-foreground",
            bgColor || "bg-slate-100" // Use optional bgColor or fallback to bg-slate-100
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "d MMMM yyyy", { locale: id }) // Format date in Indonesian
          ) : (
            <span>Pilih Tanggal Lahir</span>
          )}{" "}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className=" w-auto p-0">
        <Calendar
          mode="single"
          captionLayout="dropdown-buttons"
          selected={date ? new Date(date) : undefined}
          onSelect={handleDateChange}
          fromYear={1920}
          toYear={2030}
        />
      </PopoverContent>
    </Popover>
  );
};
