export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute top-0 w-full z-40 min-h-screen bg-white text-black">
      {children}
    </div>
  );
}
