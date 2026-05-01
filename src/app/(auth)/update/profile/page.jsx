'use client'
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";


const Login = () => {

  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const onSubmit = async (e) => {

    const { name, image } = e
    await authClient.updateUser({
      name: name,
      image: image
    })
  }
  return (
    <div className="flex flex-col justify-center items-center mt-25">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10">
        <h1 className="text-3xl text-center font-bold my-5">Update Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label className="label">Name</label>
            <input type="text" {...register("name")} className="input" placeholder="Enter Name" />

          </fieldset>
          <fieldset>
            <label className="label">Image</label>
            <input type="text" {...register("image")} className="input" placeholder="Image URL" />
          </fieldset>

          <button className="btn btn-neutral mt-4 w-full">Update Data</button>

        </form>
      </div>
    </div>

  );
};

export default Login;