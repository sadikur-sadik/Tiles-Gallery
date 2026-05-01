'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import defaultImage from "./../../../assets/default.jpg"
import { FaPenFancy, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
  const { data } = authClient.useSession();

  return (
    <div className="w-full pb-10">
      <div className="relative mb-20 md:mb-35">
   
        <div className="bg-blue-800 w-full h-[20vh] md:h-[30vh]"></div>

        <div className="absolute bottom-0 w-full flex justify-center translate-y-1/2">
   
          <div className="relative h-40 w-40 md:h-60 md:w-60">
            <Image
              src={data?.user?.image || defaultImage}
              fill
              alt="User Image"
              className="rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Name Section */}
      <div className="text-xl md:text-2xl font-bold text-center text-blue-800 px-4">
        {data?.user?.name || "N/A"}
      </div>

  
      <div className="max-w-[90%] md:w-150 lg:w-200 my-10 mx-auto border border-gray-300 p-4 md:p-6 rounded-2xl md:rounded-4xl">
        <div className="flex justify-between items-center border-b border-gray-300 pb-5">
          <div className="text-lg md:text-xl font-bold">Profile Details</div>
          <Link href="/update/profile">
            <button className="flex items-center gap-2 md:gap-3 bg-blue-800 text-white text-sm md:text-base font-bold px-3 py-2 rounded-md">
              <span>Edit Profile</span><FaPenFancy />
            </button>
          </Link>
        </div>

        <div className="space-y-4 p-2 md:p-4">
       
          <div className="flex flex-col md:flex-row md:gap-25 md:items-center">
            <p className="font-bold w-20">ID</p>
            <p className="text-gray-700 truncate">{data?.user?.id.slice(0, 5) || "N/A"}</p>
          </div>

        
          <div className="flex flex-col md:flex-row md:gap-25 md:items-center">
            <p className="font-bold w-20">Email</p>
            <p className="text-gray-700 break-all">{data?.user?.email || "N/A"}</p>
          </div>

          
          <div className="flex flex-col md:flex-row md:gap-25 md:items-center">
            <p className="font-bold w-20">Verification</p>
            <div className="mt-1 md:mt-0">
              {data?.user?.emailVerified ? (
                <div className="inline-flex gap-2 items-center bg-green-200 text-xs md:text-sm font-bold rounded-full px-2 py-1 text-green-600">
                  <FaCheckCircle /><span>Verified</span>
                </div>
              ) : (
                <div className="inline-flex gap-2 items-center text-xs md:text-sm font-bold bg-red-200 rounded-full px-2 py-1 text-red-600">
                  <FaTimesCircle /><span>Not Verified</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;