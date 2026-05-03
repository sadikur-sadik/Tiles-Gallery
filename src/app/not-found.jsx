import Link from "next/link";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function NotFound() {
  return (
    <main className="min-h-[90dvh] w-full flex items-center justify-center px-6 animate__animated animate__bounceIn">
      <div className="container mx-auto max-w-2xl flex flex-col items-center justify-center text-center">
        
   
        <div className="mb-6 md:mb-10">
          <div className="p-4 md:p-6 bg-blue-50 rounded-3xl inline-block">
            <HiOutlineExclamationCircle className="h-12 w-12 md:h-20 md:w-20 text-blue-800" />
          </div>
        </div>

   
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none">
            404
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
              Oops span Page Not Found
            </h2>
            <p className="text-slate-500 text-base md:text-xl max-w-md mx-auto leading-relaxed">
              We cannot seem to find the page you are looking for. It might have been moved or deleted.
            </p>
          </div>
        </div>

        
        <div className="mt-8 md:mt-12 w-full flex justify-center">
          <Link 
            href="/home" 
            className="w-full sm:w-auto bg-blue-800 hover:bg-transparent text-white hover:text-blue-800 px-12 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-blue-200 active:scale-95 border border-blue-800 text-center"
          >
            Back to Home
          </Link>
        </div>
        
      </div>
    </main>
  );
}