"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

const accountFormSchema = z.object({
  shopName: z
    .string({ required_error: "Name is Required" })
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  contactPersonName: z
    .string({ required_error: "Contact person name is Required" })
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  emailAddress: z.string({ required_error: "Email is Required" }).email({
    message: "Please enter a valid email",
  }),
  primaryContactNo: z
    .number({
      required_error: "Primary Contact is Required",
      invalid_type_error: "Primary Contact must be a number",
    })
    .min(1000000000, {
      message: "Phone number must be 10 digits", // Descriptive error message
    })
    .max(9999999999, { message: "Phone number must be 10 digits" }) // Descriptive error message
    .refine((val) => val.toString().length === 10, {
      message: "Phone number must be 10 digits",
    }),
  secondaryContactNo: z
    .number({
      required_error: "Phone is Required",
      invalid_type_error: "Secondary Contact must be a number",
    }) // Type checking error: secondaryContactNo is optional
    .min(1000000000, {
      message: "Phone number must be 10 digits",
    })
    .max(9999999999, { message: "Phone number must be 10 digits" })
    .optional(),
  creditLimit: z.number().optional(),
  maxCreditDuePeriod: z.number().optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function RegisterForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-row w-full gap-10 flex-wrap">
          <FormField
            control={form.control}
            name="shopName"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} className="w-96" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPersonName"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>Contact Person Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Contact person name"
                    className="w-96"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    className="w-96"
                    type="email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="primaryContactNo"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>Primary Contact No </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Primary contact"
                    className="w-96"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="secondaryContactNo"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>Secondary Contact No (optional) </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Secondary contact"
                    className="w-96"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="creditLimit"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>Credit Limit (optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Credit limit"
                    className="w-96"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter the maximum amount this creditor is eligible to borrow
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxCreditDuePeriod"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>Max credit due period (optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Max credit period"
                    className="w-96"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter the max number of time period that a creditor can remain
                  their due balance
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="mr-5 w-40">
          Register Creditor
        </Button>
        <Button type="reset" variant={"outline"} className="w-40">
          Reset
        </Button>
      </form>
    </Form>
  );
}
