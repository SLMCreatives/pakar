import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Skeleton className="w-full h-64 " />
    </div>
  );
}
