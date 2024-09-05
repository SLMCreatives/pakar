import { login, signup } from "./action";

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center text-white">
      <form className="flex flex-col gap-4">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          className="text-black p-1 px-2 rounded-sm"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          className="text-black p-1 px-2 rounded-sm"
          name="password"
          type="password"
          required
        />
        <div className="flex flex-row gap-4 my-4">
          <button
            className="p-1 px-4 rounded-full bg-slate-700"
            formAction={login}
          >
            Log in
          </button>
          <button className="p-1 px-4 rounded-full" formAction={signup}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
