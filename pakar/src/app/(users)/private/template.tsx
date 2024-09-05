import Dheader from "@/app/components/Dheader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Dheader />
      {children}
    </div>
  );
}
