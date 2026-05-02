'use client'
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";


const Login = () => {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const onSubmit = async (e) => {

    const { name, image } = e
    const { data, error } = await authClient.updateUser({
      name: name,
      image: image
    })

    if (error) {
      toast.error('Profile update Failed! Try Again', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
      );
    } else {
      toast.success('Profile update Successful!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
      );
    }
  }
  return (
    <div className="flex flex-col justify-center items-center mt-25">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10">
        <h1 className="text-3xl text-center font-bold my-5">Update Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input"
              placeholder="Enter Name"
            />
            {errors.name && <p className="text-red-500 my-1 font-semibold text-xs">{errors.name.message}</p>}
          </fieldset>

          <fieldset>
            <label className="label">Image</label>
            <input
              type="text"
              {...register("image", { required: "Profile image URL is required" })}
              className="input"
              placeholder="Image URL"
            />
            {errors.image && <p className="text-red-500 my-1 font-semibold text-xs">{errors.image.message}</p>}
          </fieldset>
          <button className="btn btn-neutral mt-4 w-full">Update Data</button>

        </form>
      </div>
    </div>

  );
};

export default Login;