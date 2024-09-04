"use client";

import Link from "next/link";

const navigation = [
  {
    name: "Search",
    href: "/trainers",
  },
  {
    name: "Login",
    href: "/login",
  },
];

const mobilenav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Trainers",
    href: "/trainers",
  },
  {
    name: "Events",
    href: "/",
  },
  {
    name: "Login",
    href: "/",
  },
];
export default function Header() {
  return (
    <div className="flex w-full flex-row items-center justify-end gap-4 px-4 py-4">
      <Link href="/" className="fixed left-4 top-4">
        <img
          src="/favicon.png"
          alt="Pakar.me"
          className="h-10 w-10 rounded-xl bg-white shadow-sm shadow-cyan-900"
        />
      </Link>
      <nav className="hidden flex-row gap-3 divide-x-2 divide-slate-50/50 md:flex">
        {navigation.map((item) => (
          <Link href={{ pathname: item.href }} key={item.name}>
            <p className="pl-3 text-white hover:text-cyan-200">{item.name}</p>
          </Link>
        ))}
      </nav>

      <div className="fixed right-4 top-6 md:hidden">
        <button onClick={() => toggleMenu()}>
          <img src="/menu.svg" alt="menu" className="h-6 w-6 fill-white" />
        </button>
        <div
          id="mobile-menu"
          className="fixed right-0 top-0 h-screen w-1/2 rounded-l-xl bg-white shadow-xl shadow-black"
        >
          <button className="fixed right-4 top-8" onClick={() => toggleMenu()}>
            X
          </button>

          <nav className="mt-32 flex flex-col gap-8 pl-8">
            {mobilenav.map((item) => (
              <Link
                key={item.name}
                href={{ pathname: item.href }}
                onClick={() => closeMenu()}
              >
                <p className="text-lg text-black hover:font-bold hover:text-cyan-500">
                  {item.name}
                </p>
              </Link>
            ))}
          </nav>
          <Link href="/" className="fixed bottom-0 right-4">
            <img
              src="/logo.jpg"
              alt="Pakar.me"
              className="aspect-square h-40 w-40"
            />
          </Link>
        </div>
      </div>
      <div className="fixed right-4 top-4"></div>
    </div>
  );
}

function openMenu() {
  document.getElementById("mobile-menu")?.classList.replace("hidden", "fixed");
}

function closeMenu() {
  document.getElementById("mobile-menu")?.classList.replace("fixed", "hidden");
}

function toggleMenu() {
  if (document.getElementById("mobile-menu")?.classList.contains("hidden")) {
    openMenu();
  } else {
    closeMenu();
  }
}
