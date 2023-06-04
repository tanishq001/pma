import React, { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import advisors from "../../../assets/about-us/leader.svg";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useAuth } from "../../../context/AuthProvider";

const Login = () => {
  return (
    <>
      <div className="max-w-7xl bg-light rounded-3xl mx-auto my-20 grid md:grid-cols-2 py-20 ">
        <div className="px-20 hidden md:block">
          <img
            src={advisors}
            alt="login image"
            width={"168px"}
            className="-translate-y-[35px]"
          />
          <p className="text-main flex flex-nowrap text-sm">
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </p>
          <article className="text-sm">
            With plan my admission I found everything I need for applying in one
            single place. It saved me a lot of time from searching for
            information on several university websites. Big thanks to the entire
            PMA team for making the entire process so smooth and ease wit
            constant support.
            <div className="pt-20">
              <cite className="font-bold">- Narendra Modi</cite>
              <p className="text-sm text-main">Stanford University, France</p>
            </div>
          </article>
        </div>
        <div className="flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn, currentUser } = useAuth();
  const [visible, setVisible] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoding] = useState(false);

  const handelSignIn = async (event) => {
    event.preventDefault();

    try {
      setLoding(true);
      setError("");
      signIn(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError("Invalid credentials");
    }
    setLoding(false);
    <Navigate to={"/about"} />;
  };

  return (
    <div className="md:w-[400px] sm:w-[360px] w-[340px] bg-white md:px-10 px-5 py-5 rounded-2xl shadow-lg border border-main">
      <h1 className="text-4xl font-bold py-3">LOGIN</h1>
      {error && (
        <p className="text-center bg-red-200 py-1 rounded-md">{error}</p>
      )}
      <form action="" onSubmit={handelSignIn}>
        <div>
          <label for="email" className="block mb-2 text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              id="email"
              className="sm:text-sm rounded-sm block w-full p-2.5 bg-light outline-none mb-3 mt-1"
              placeholder="name@company.com"
              required={true}
              ref={emailRef}
            />
          </label>

          <label for="email" className="block mb-2 text-sm font-medium">
            Password
            <input
              type="password"
              name="password"
              id="password"
              className="sm:text-sm rounded-sm block w-full p-2.5 bg-light outline-none mt-1"
              required={true}
              ref={passwordRef}
              autoComplete="off"
            />
          </label>
          <Link
            for="email"
            className="block mb-2 text-sm pt-3 text-main hover:underline "
          >
            Forgot password?
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="text-center bg-main py-2 w-full text-white hover:font-medium rounded-sm"
          >
            Login
          </button>
          <p className="py-2 text-sm">
            Not a user ?
            <Link to="/register" className="text-main hover:underline px-1">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
