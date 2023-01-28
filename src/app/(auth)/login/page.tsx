import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col place-content-stretch md:flex-row  items-center min-h-screen ">
      <Left />
      <Right />
    </div>
  );
}

function Left() {
  return (
    <div className="md:h-screen w-full md:w-1/2 from-slate-800 via-slate-900 to-black  bg-gradient-to-b font-thin text-white">
      <div className="pt-8 md:my-28 px-8 md:px-0 md:max-w-sm flex flex-col place-content-center items-center mx-auto">
        <p className="text-3xl md:text-5xl  w-full md:pb-20">Write Wise</p>
        <div className="flex flex-col gap-2 mt-10 w-full text-2xl md:text-4xl ">
          <h1 className="">Welcome back to</h1>
          <h1 className="">Write Wise</h1>
        </div>
        <div className="w-full my-8">
          <p className="font-light">
            Don&apos;t have an account?{" "}
            <span className="text-blue-500">
              <Button
                variant={"link"}
                className="text-blue-500 focus:outline-none"
                size="sm"
              >
                <Link href={"/signup"}>Signup</Link>
              </Button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <form
      action="/api/auth/login"
      className="flex flex-col items-center place-content-center bg-white w-full md:w-1/2 pt-24 md:pt-0"
    >
      <div className="flex flex-col  gap-2 w-2/3">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <Input
          placeholder="Email address"
          required
          autoComplete="email"
          type="email"
          className="mb-4"
          formNoValidate={true}
          name="email"
        />
        <Input
          placeholder="Password"
          autoComplete="current-password"
          required
          type="password"
          className="mb-4"
        />

        <div className="flex items-center space-x-2 mb-4 select-none">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <Button>Login</Button>
      </div>
    </form>
  );
}
