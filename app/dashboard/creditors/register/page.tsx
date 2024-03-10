"use client";
import { Separator } from "@/components/ui/separator";
import { RegisterForm } from "./register-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold">Register Creditor</h3>
        <p className="text-sm text-muted-foreground">
          Register Creditor by filling out the following details
        </p>
      </div>
      <Separator />
      <RegisterForm />
    </div>
  );
}
