"use client"
import Link from "next/link";
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import defaultImage from "./../../assets/default.jpg"
import { Bounce, toast } from "react-toastify";

const Navbar = () => {

  const router = useRouter();
  const { data } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  }
  const handleToast = () => {
    toast.error('You do not have an account! Sign in first.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    })
  }

  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-0">
        <div className="navbar py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/all-tiles">All Tiles</Link></li>
                <li onClick={!data ? handleToast : undefined}><Link href="/profile">My Profile</Link></li>
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-blue-800 text-lg md:text-2xl font-bold p-0">
              Tiles Gallery
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/home">Home</Link></li>
              <li><Link href="/all-tiles">All Tiles</Link></li>
              <li onClick={!data ? handleToast : undefined}><Link href="/profile">My Profile</Link></li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="flex gap-2 md:gap-5 items-center">
              {data && (
                <div className="block">
                  <Image
                    src={data?.user.image || defaultImage}
                    height={40}
                    width={40}
                    className="object-cover rounded-full w-8 h-8 md:w-11 md:h-11"
                    alt={data?.user.name || "User Image"}
                  />
                </div>
              )}
              {data ? (
                <button className="btn btn-sm md:btn-md font-bold bg-red-600 text-white px-2 md:px-4" onClick={handleSignOut}>
                  Sign Out
                </button>
              ) : (
                <Link href="/login">
                  <button className="btn btn-sm md:btn-md font-bold bg-blue-800 text-white px-4 md:px-8">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;