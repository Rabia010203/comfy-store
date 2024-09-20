import React from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (err) {
      toast.error('guest user login error. please try again')
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-bold text-3xl">login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          
        />
        <FormInput
          type="password"
          label="password"
          name="password"
         
        />
        <SubmitBtn text="login" />
        <button
          onClick={loginAsGuestUser}
          className="btn btn-primary uppercase text-sm text-slate-200"
        >
          guest user
        </button>
        <div className="text-center">
          <span className="">Not a member yet?</span>
          <Link to="/register" className="btn  btn-link no-underline text-base">
            Register
          </Link>
        </div>
      </Form>
    </section>
  );
};
export default Login;
