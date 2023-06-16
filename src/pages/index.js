import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    router.push("dashboard");
  };

  return (
    <div className="flex flex-row ">
      <div className=" w-0 h-0  md:w-[40%] bg-black flex md:h-screen justify-center items-center">
        <h1 className="text-white font-[700] text-7xl tracking-wider">
          Board.
        </h1>
      </div>

      <div className="w-full px-4 h-screen bg-[#F5F5F5] flex justify-center items-center md:w-[60%]   ">
        <div className="flex flex-col justify-center max-w-[385px] mx-auto">
          <h1 className="text-black font-[700] text-3xl tracking-wider ">
            Sign In
          </h1>
          <h1 className="text-[#858585]  text-lg mt-1">
            Sign In to your account
          </h1>
          <div className="flex flex-row row-gap-2 justify-between my-6">
            <button className="px-4 py-1 bg-white text-[#858585] text-sm flex gap-2 items-center rounded-lg">
              <FcGoogle size="20px" /> Sign In with Google{" "}
            </button>
            <button className="px-4 py-1 bg-white text-[#858585] rounded-lg flex gap-2 items-center text-sm">
              <AiFillApple color="grey" size="20px" /> Sign In with Apple{" "}
            </button>
          </div>

          <form
            className="bg-white w-full p-8 rounded-lg"
            onSubmit={handleSubmit}
          >
            <h4 className="text-[1rem] font-[400]">Email Address</h4>
            <input
              type="email"
              className="w-full p-2 bg-[#F5F5F5] rounded-md my-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className="text-[1rem] font-[400]">Password</h4>
            <input
              type="password"
              className="w-full p-2 bg-[#F5F5F5] rounded-md my-2"
              required
              value={password}
              onChange={(e) => setPasword(e.target.value)}
            />
            <button className="text-[1rem] font-[400] text-[#346BD4]">
              Forgot Password ?
            </button>
            <button
              type="submit"
              className="w-full font-bold bg-black rounded-md text-white text-[1rem] mt-4 py-2"
            >
              Sign In
            </button>
          </form>
          <h4 className="text-[1rem] text-[#858585] font-[400] flex justify-center gap-1 text-center mt-4">
            Don't have an account?{" "}
            <button className="text-[#346BD4]">Register here</button>
          </h4>
        </div>
      </div>
    </div>
  );
}
