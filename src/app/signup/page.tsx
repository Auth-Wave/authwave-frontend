"use client";

import Input from "@/components/input";
import PrimaryBtn from "@/components/buttons/primary-btn";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { adminAuthService } from "@/services/admin-auth.service";

interface SignupFormInputs {
  email: string;
  password: string;
  confirmPassword: string; // Added field
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch, // Added to compare passwords
    formState: { errors },
    clearErrors,
  } = useForm<SignupFormInputs>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignupFormInputs) => {
    setLoading(true);
    try {
      const response = await adminAuthService.signup(data);
      if (response.success) {
        console.log(response);
        // Send a toast notification

        // Clear the form
        reset();
      }
      clearErrors();
    } catch (error: any) {
      // Send error toast notification
      if (error.type === "ALREADY_EXISTS") {
        console.log(error.message);
      }
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
              <span className="bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-2 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18">
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
              <span className="bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-2 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* Confirm Password input */}
          <div className="w-[350px] 2xl:w-[500px] flex flex-col items-center justify-center gap-10">
            <Input
              widthStyle="w-full"
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword?.message && (
              <span className="bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-2 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          {/* Signup button */}
          <PrimaryBtn
            text="Sign up"
            type="submit"
            className="w-[350px] 2xl:w-[500px]"
            loading={loading}
          />
          {/* Login link */}
          <div className="flex items-center gap-8 text-14 2xl:text-20">
            <span className="text-white-1 font-thin">
              Already have an account?
            </span>
            <Link
              href="/login"
              replace
              className="text-white font-medium hover:text-p-accent"
            >
              Login
            </Link>
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default SignupPage;
