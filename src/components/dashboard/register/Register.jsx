import React, { useState, useRef } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";
import advisors from "../../../assets/about-us/leader.svg";
import { useAuth } from "../../../context/AuthProvider";

const Register = () => {
  return (
    <>
      <div className="max-w-7xl md:bg-light rounded-3xl mx-auto md:mb-20 mb-10 md:mt-32 grid md:grid-cols-2 md:pt-20 pt-10 ">
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
        <div className="relative md:-top-[150px]">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const PhoneNumberRef = useRef();
  const { signup, currentUser } = useAuth();

  async function handelSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords are not same");
      return;
    }

    try {
      setLoading(true);
      setError("");
      signup(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value,
        PhoneNumberRef.current.value
      );
      emailRef.current.value = "";
      passwordRef.current.value = "";
      usernameRef.current.value = "";
      confirmPasswordRef.current.value = "";
      PhoneNumberRef.current.value = "";
    } catch (error) {
      setError("signup failed");
    }
    setLoading(false);
  }

  let style =
    "outline-none focus:outline-none bg-light px-2 py-2  form-control rounded-sm focus:border focus:border-main transition ease-in-out duration-900";
  let check_for = "after:absolute after:text-main after:content-['*']";

  return (
    <form
      className="flex  flex-col md:w-2/3 sm:w-[360px] w-[340px] border border-main rounded-xl md:px-8 px-3 py-5  bg-white mx-auto"
      onSubmit={handelSubmit}
    >
      <h1 className="text-4xl font-bold py-3">Register with Us</h1>
      {error && (
        <p className="text-center bg-red-200 py-1 rounded-md">{error}</p>
      )}
      <label for="email" className="block my-2 text-sm font-medium">
        Full Name
      </label>
      <input type="text" className={style} required ref={usernameRef}></input>
      <label for="email" className="block my-2 text-sm font-medium">
        Email
      </label>
      <input type="email" className={style} requried ref={emailRef}></input>
      <label for="email" className="block my-2 text-sm font-medium">
        Phone Number
      </label>
      <input
        type="tel"
        className={style}
        requried
        pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$"
        ref={PhoneNumberRef}
      ></input>

      <label for="email" className="block my-2 text-sm font-medium">
        Password
      </label>
      <input
        type="password"
        name="password"
        className="sm:text-sm rounded-sm block w-full p-2.5 bg-light outline-none"
        required
        ref={passwordRef}
      />

      <label for="email" className="block my-2 text-sm font-medium">
        Confirm Password
      </label>

      <input
        type="password"
        name="password"
        className="sm:text-sm rounded-sm block w-full p-2.5 bg-light outline-none"
        required
        ref={confirmPasswordRef}
      />

      <button
        disabled={loading}
        type="submit"
        className="bg-main py-2 mt-8 mb-4 rounded-sm text-white"
      >
        Register
      </button>
      <p className=" text-sm">
        Already a user ?
        <Link to="/login" className="text-main hover:underline px-1">
          login
        </Link>
      </p>
    </form>
  );
};

export default Register;
