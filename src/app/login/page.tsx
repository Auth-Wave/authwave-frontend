"use client";

import Input from "@/components/input";
import PrimaryBtn from "@/components/buttons/primary-btn";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<LoginFormInputs>();

  const [loading, setLoading] = useState(false);

  // Form submit handler
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      setLoading(true);
      console.log(data);
      reset();
      clearErrors();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-20"
        >
          {/* Email input */}
          <div className="w-[350px] 2xl:w-[500px] flex flex-col items-center justify-center gap-10">
            <Input
              widthStyle="w-full"
              label="Email"
              placeholder="Enter your email"
              type="email"
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email?.message && (
              <span className=" bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-2 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* Password input */}
          <div className="w-[350px] 2xl:w-[500px] flex flex-col items-center justify-center gap-10">
            <Input
              widthStyle="w-full"
              label="Password"
              placeholder="Enter your password"
              type="password"
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
                  message:
                    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)",
                },
              })}
            />
            {errors.password?.message && (
              <span className=" bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-2 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* Login button */}
          <PrimaryBtn
            text="Login"
            type="submit"
            className="w-[350px] 2xl:w-[500px]"
            loading={loading}
          />
          {/* Sign up link */}
          <div className="flex items-center gap-8 text-14 2xl:text-20">
            <span className="text-white-1 font-thin">
              Do not have an account?
            </span>
            <Link
              href="/signup"
              replace
              className="text-white font-medium hover:text-p-accent"
            >
              Sign up
            </Link>
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default LoginPage;