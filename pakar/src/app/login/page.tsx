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
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  );
}
