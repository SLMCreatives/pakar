import Dashboard from "@/components/dashboard/pricing";

export default async function PricingPage() {
  return (
    <div className="flex flex-col gap-8 -mt-32">
      <div className="mx-auto w-full max-w-6xl gap-2 pt-16 items-center justify-center">
        <Dashboard />
      </div>
    </div>
  );
}
