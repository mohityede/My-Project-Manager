import { useState } from "react";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/Signup";
import { Button } from "@/components/ui/button";

function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="relative rounded-lg flex justify-center items-center h-[30rem] w-[25rem]">
        <div className="absolute flex justify-center items-center flex-col rounded-lg bg-white border-b-black">
          <div className="w-full p-10 space-y-5">
            {isLogin ? (
              <div>
                <Login />
                <span>Create new Account</span>
                <Button
                  size="sm"
                  className="m-5"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Register
                </Button>
              </div>
            ) : (
              <div>
                <Signup />
                <span>Already have account!</span>
                <Button
                  className="m-5"
                  size="sm"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Login
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
