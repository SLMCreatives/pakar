import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <p className="text-white">Sorry, something went wrong</p>
      <Link href="/login">
        <button className="text-white text-sm p-1 px-4 rounded-full bg-slate-700">
          Try Again
        </button>
      </Link>
    </div>
  );
}
