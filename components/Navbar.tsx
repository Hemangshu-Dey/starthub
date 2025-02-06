import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={143} height={30} />
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="font-semibold text-black-100"
              >
                <span className="max-sm:hidden">Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({
                    redirectTo: "/",
                  });
                }}
                className="font-semibold text-red-500 cursor-pointer"
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button>Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
