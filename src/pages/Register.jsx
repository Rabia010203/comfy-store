import React from "react";
import { Form, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

import { Link } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-bold text-3xl capitalize">register</h4>
        <FormInput
          type="text"
          label="username"
          name="username"
          defaultValue="samsung"
        />
        <FormInput
          type="email"
          label="email"
          name="email"
          defaultValue="samsung2@gmail.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secrets"
        />
        <SubmitBtn text="register" />
        <div className="text-center">
          <span className="">Already a member?</span>
          <Link to="/login" className="btn  btn-link no-underline text-base">
            Login
          </Link>
        </div>
      </Form>
    </section>
  );
};
export default Register;
