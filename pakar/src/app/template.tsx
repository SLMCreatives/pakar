import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {" "}
      <div className="relative z-30 mx-auto flex flex-row items-center justify-center">
        <Header />
      </div>{" "}
      {children} <Footer />
    </div>
  );
}
