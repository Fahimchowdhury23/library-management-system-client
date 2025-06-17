import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.dismiss();
    toast.error("Are you lost❓ you shouldn't be here.", {
      duration: 2000,
      className: "font-medium text-lg",
    });
  }, []);

  return (
    <div className="bg-gradient-to-b min-h-screen from-primary to-white">
      <title>Page Not Found</title>
      <div className="flex flex-col pt-16 my-auto justify-center items-center">
        <div className="bg-gradient-to-tl from-accent to-primary rounded-2xl w-[40%] flex items-center justify-center">
          <img
            className="rounded-2xl w-130 h-130"
            src="https://i.ibb.co/R4sGRSjC/error-Page.png"
            alt="404 Error!"
          />
        </div>

        <div className="flex mt-6 gap-10">
          <button
            className="cursor-pointer px-3 py-2 ml-8 font-medium text-lg rounded-xl bg-neutral"
            onClick={() => {
              toast.dismiss();
              toast.success("Let's pick up right where you left off! ⏳", {
                duration: 3000,
              });
              setTimeout(() => navigate(-1), 2000);
            }}
          >
            Previous Page
          </button>
          <button
            className="cursor-pointer px-3 py-2 font-medium text-lg rounded-xl bg-accent"
            onClick={() => {
              navigate("/");
              toast.dismiss();
              toast.success(
                "Welcome back again, don't roam around carelessly. 🏡"
              );
            }}
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
