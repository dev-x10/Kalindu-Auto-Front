import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonInputProps {
  className?: string;
}

const SkeletonInput = ({ className, ...props }: SkeletonInputProps) => {
  return (
    <div
      className={cn("animate-pulse bg-slate-200 h-10 rounded-md", className)}
      {...props}
    />
  );
};

export default function RegisterFormSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex flex-row w-full gap-10 flex-wrap">
        <div>
          <div className="mb-2 h-6 rounded bg-slate-200 w-24 animate-pulse" />
          <SkeletonInput className="w-96" />
        </div>
        <div>
          <div className="mb-2 h-6 rounded bg-slate-200 w-48 animate-pulse" />
          <SkeletonInput className="w-96" />
        </div>
        <div>
          <div className="mb-2 h-6 rounded bg-slate-200 w-28 animate-pulse" />
          <SkeletonInput className="w-96" />
        </div>
        <div>
          <div className="mb-2 h-6 rounded bg-slate-200 w-36 animate-pulse" />
          <SkeletonInput className="w-96" />
        </div>
        <div>
          <div className="mb-2 h-6 rounded bg-slate-200 w-56 animate-pulse" />
          <SkeletonInput className="w-96" />
        </div>
        <div>
          <div className="mb-2 h-6 rounded bg-slate-200 w-28 animate-pulse" />
          <SkeletonInput className="w-96" />
          <div className="mt-2 h-4 rounded bg-slate-200 w-96 animate-pulse" />
        </div>
        <div>
          <div className="mb-2 h-6 rounded bg-slate-200 w-48 animate-pulse" />
          <SkeletonInput className="w-96" />
          <div className="mt-2 h-4 rounded bg-slate-200 w-96 animate-pulse" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="h-10 bg-slate-200 rounded-md w-40 animate-pulse" />
        <div className="h-10 bg-slate-200 rounded-md w-40 animate-pulse" />
      </div>
    </div>
  );
}
