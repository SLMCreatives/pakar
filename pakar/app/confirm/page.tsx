import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <p className="text-white">
        Please wait for admin to approve your email address.
      </p>
      <Link href="/dashboard">
        <button className="text-white text-sm p-1 px-4 rounded-full bg-slate-700">
          Dashboard
        </button>
      </Link>
    </div>
  );
}
