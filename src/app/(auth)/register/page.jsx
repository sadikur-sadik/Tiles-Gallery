'use client'

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";


const Register = () => {
  const [show, setShow] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors)

  const onSubmit = async (e) => {

    const { name, image, email, password } = e



    const { data, error } = await authClient.signUp.email({
      name: name,
      image: image,
      email: email,
      password: password,
      callbackURL: "/home",
    });

  }



  return (
    <div className="flex flex-col justify-center items-center mt-25">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10">
        <h1 className="text-3xl text-center font-bold my-5">Create Account</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label className="label">Name</label>
            <input type="text" {...register("name", { required: "Name is required" })} className="input" placeholder="Enter Name" />
            
          </fieldset>
          <fieldset>
            <label className="label">Image</label>
            <input type="text" {...register("image", { required: "Image is required" })} className="input" placeholder="Image URL" />
          </fieldset>

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

          <button className="btn btn-neutral mt-4 w-full">Login</button>
          
        </form>
      </div>
    </div>
  );
};

export default Register;