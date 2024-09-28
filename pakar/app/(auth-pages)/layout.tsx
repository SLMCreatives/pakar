import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl flex flex-col gap-12 items-center h-screen ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
