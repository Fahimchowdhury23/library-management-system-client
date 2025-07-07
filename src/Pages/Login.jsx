import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../Contexts/AuthContext";
import { HiOutlineMail } from "react-icons/hi";

const Login = () => {
  const { signInUser, googleSignIn } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  // SignIn With Email and Password

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasMinLength = password.length >= 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    toast.dismiss();

    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!hasUppercase) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!hasLowercase) {
      toast.error("Password must include at least one lowercase letter.");
      return;
    }
    if (!hasDigit) {
      toast.error("Password must include at least one digit.");
      return;
    }
    if (!hasMinLength) {
      toast.error("Must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    signInUser(email, password)
      .then((result) => {
        toast.dismiss();
        toast.success(`Welcome back, ${result?.user?.displayName}!`, {
          duration: 3000,
          className: "text-center",
        });
        setLoading(false);
        navigate(state || "/");
      })
      .catch((error) => {
        toast.dismiss();
        toast.error("Invalid username or password", error?.message);
        setLoading(false);
      });
  };

  // SignIn With Google

  const handleGoogleSignIn = () => {
    setGoogleLoading(true);

    googleSignIn()
      .then((result) => {
        toast.dismiss();
        toast.success(
          `Welcome, ${result?.user?.displayName}! You're logged in.`,
          {
            duration: 1000,
            className: "text-center",
          }
        );
        setGoogleLoading(false);
        navigate(state || "/");
      })
      .catch((error) => {
        setGoogleLoading(false);
        toast.dismiss();
        toast.error("Something went wrong", error?.message);
      })
      .finally(() => setGoogleLoading(false));
  };
  return (
    <section className="py-16">
      <title>Login Page | LibraFlow</title>
      <div className="grid grid-cols-1 max-w-xl lg:max-w-full mx-auto lg:mx-0 gap-6 lg:gap-0 lg:grid-cols-2">
        <div className="flex flex-col w-full rounded-xl lg:rounded-r-none items-center justify-center bg-gradient-to-t from-neutral to-primary">
          <h2 className="text-center pt-6 lg:pt-0 text-4xl font-bold text-accent drop-shadow mb-8">
            {state ? "You have to Login first!" : "Welcome Back!"}
          </h2>
          <img
            src="https://i.ibb.co/bj9C5vdR/Humaaans-Wireframe.png"
            alt="3 characters having conversation"
          />
        </div>

        <div className="w-full p-10 lg:border-l-0 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl   border border-neutral shadow-xl">
          <div className="w-10/12 mx-auto">
            {/* Google Sign In */}

            <button
              onClick={handleGoogleSignIn}
              className="btn rounded-2xl w-full font-semibold bg-neutral text-accent border-none transition backdrop-blur-xl"
            >
              {googleLoading ? (
                <span className="loading loading-spinner text-accent"></span>
              ) : (
                <>
                  <FcGoogle size={24} className="bg-white rounded-full p-0.5" />
                  Continue with Google
                </>
              )}
            </button>

            {/* Login Form */}

            <form onSubmit={handleLogIn} className="flex flex-col gap-3">
              <div className="flex items-center py-3">
                <p className="border-b-2 w-[15%] lg:w-[20%] border-accent/70"></p>
                <p className="text-center w-[70%] lg:w-[60%] text-accent/70">
                  Or Continue with Email / Password
                </p>
                <p className="border-b-2 w-[15%] lg:w-[20%] border-accent/70"></p>
              </div>

              {/* Email Field*/}

              <label className="flex items-center gap-2 text-accent/70">
                <HiOutlineMail size={24} />
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Email address"
              />

              {/* Password Field */}

              <label className="flex items-center gap-2 text-accent/70">
                <MdLockOutline size={24} /> Password
              </label>

              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  className="px-4 py-3 w-full rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Password"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPass(!showPass);
                  }}
                  className="absolute top-3 right-5 cursor-pointer text-accent  text-2xl"
                >
                  {showPass ? <LuEye></LuEye> : <LuEyeClosed></LuEyeClosed>}
                </button>
              </div>

              <a className="text-sm text-accent cursor-pointer hover:underline">
                Forgotten password?
              </a>

              <button
                type="submit"
                className="w-full btn py-3 rounded-2xl border-none text-lg bg-neutral text-accent font-medium transition backdrop-blur-xl"
              >
                {loading ? (
                  <span className="loading loading-spinner text-accent"></span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <p className="mt-6 justify-center flex gap-2 text-accent/80">
              New to LibraFlow?
              <Link
                to="/auth/register"
                className="font-semibold hover:underline text-accent"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
