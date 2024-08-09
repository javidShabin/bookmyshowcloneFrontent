import { useForm } from "react-hook-form";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      className="flex flex-col gap-2 mt-4 w-[1000px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="font-semibold" htmlFor="name">Name</label>
      <input
        className="mb-2 border border-indigo-600 py-2 rounded-md"
        type="text"
        id="name"
        {...register("name", { required: true })}
      />

      <label className="font-semibold" htmlFor="email">Email</label>
      <input
        className="mb-2 border border-indigo-600 py-2 rounded-md"
        type="email"
        id="email"
        {...register("email", { required: true })}
      />

      <label className="font-semibold" htmlFor="password">Password</label>
      <input
        className="mb-2 border border-indigo-600 py-2 rounded-md"
        type="password"
        id="password"
        {...register("password", { required: true })}
      />

      {errors.exampleRequired && <span>This field is required</span>}

      <input
        className="mt-6 p-2 bg-indigo-800 text-white rounded-md"
        type="submit"
      />
    </form>
  );
}
