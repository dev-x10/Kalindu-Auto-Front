"use client";
import React from "react";
import AddInvoice from "./AddInvoice";
import DataTable from "./dataTable";
import { Button } from "@/components/ui/button";

function cashInvoice() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here&apos;create a new cash invoice instantly!
        </p>
      </div>
      <AddInvoice />
      <DataTable />
      <div className="w-3/4 flex flex-row justify-end gap-5 mt-5">
        <Button className="w-20">Print</Button>
        <Button variant={"destructive"} className="w-20">
          Cancel
        </Button>
      </div>
    </>
  );
}

export default cashInvoice;
