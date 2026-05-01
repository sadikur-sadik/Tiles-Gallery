import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-25">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10">
        <h1 className="text-3xl text-center font-bold my-5">Login</h1>
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>

        <p className="mt-4 text-sm text-gray-400">
          Do not Have an Account? <Link className="text-red-500" href="/register">Register.</Link></p>
      </fieldset>
    </div>

  );
};

export default Login;