"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-6 w-64" />
        <Skeleton className="h-4 w-40 mt-2" />
      </div>
      <div className="flex flex-row w-full gap-10 flex-wrap">
        <div className="w-1/3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-96 mt-2" />
          <Skeleton className="h-3 w-24 mt-1" />
        </div>
        <div className="w-1/3">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-96 mt-2" />
          <Skeleton className="h-3 w-24 mt-1" />
        </div>
        <div className="w-1/3">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-96 mt-2" />
          <Skeleton className="h-3 w-24 mt-1" />
        </div>
        <div className="w-1/3">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-96 mt-2" />
          <Skeleton className="h-3 w-24 mt-1" />
        </div>
        <div className="w-1/3">
          <Skeleton className="h-4 w-56" />
          <Skeleton className="h-10 w-96 mt-2" />
          <Skeleton className="h-3 w-24 mt-1" />
        </div>
        <div className="w-1/3">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-96 mt-2" />
          <Skeleton className="h-3 w-48 mt-1" />
          <Skeleton className="h-3 w-48 mt-2" />
        </div>
        <div className="w-1/3">
          <Skeleton className="h-4 w-56" />
          <Skeleton className="h-10 w-96 mt-2" />
          <Skeleton className="h-3 w-48 mt-1" />
          <Skeleton className="h-3 w-48 mt-2" />
        </div>
      </div>
      <div className="flex gap-4">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
      </div>
    </div>
  );
}
