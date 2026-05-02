'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {

  const [show, setShow] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const onSubmit = async (e) => {

    const { email, password } = e;
    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/home",
    });

  }

  const signInGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-25">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10">
        <h1 className="text-3xl text-center font-bold my-5">Sign In</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label className="label">Email</label>
            <input type="email" {...register("email", { required: "Valid Email required" })} className="input" placeholder="Enter Email" />
          </fieldset>

          <fieldset className="relative">
            <label className="label">Password</label>
            <input type={show ? 'text' : 'password'} {...register("password", { required: "Valid password required" })} className="input" placeholder="Enter Password" />
            <span onClick={() => setShow(!show)} className="absolute top-8 right-3 text-gray-400">
              {show ? <IoEye /> : <IoEyeOff />}
            </span>

          </fieldset>

          <button className="btn btn-neutral mt-4 w-full">Sign in</button>
          <p className="mt-4 text-sm text-gray-400">
            Do not Have an Account? <Link className="text-red-500" href="/register">Register</Link>
          </p>
          <div className="flex items-center my-4">
            <div className="grow border-t border-gray-300"></div>
            <span className="shrink mx-4 text-gray-400">or</span>
            <div className="grow border-t border-gray-300"></div>
          </div>
          <div>
            <button onClick={signInGoogle} className="btn w-full bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;