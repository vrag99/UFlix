import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Spinner from "@/components/ui/spinner";

import { LOGIN_API } from "@/lib/endpoints";
import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import { useUserStore } from "@/hooks/useStore";
import { useAccount, useConnect } from "wagmi";
import metamask from "@/assets/metamask.svg";

export default function LoginCard() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginUsername, setLoginUsername] = useState("");

  const [loading, setLoading] = useState(false);

  const { setUser } = useUserStore();

  const { address } = useAccount();
  const { connect, connectors } = useConnect();

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        LOGIN_API,
        {
          email: loginEmail,
          username: loginUsername,
          walletAddress: address,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("Res" , res)
        if (res.status === 200) {
          console.log("Logged In");
          toast({
            title: "Logged In",
            description: "Getting things ready for you!",
          });
          setUser(res.data.data);
          navigate("/videos");
        }
      })
      .catch((err ) => {
        toast({
          title: "Invalid Username or Password",
          description: err.message ? "Please check your credentials and try again." : err.message,
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <>
      <Card className="w-[360px] backdrop-blur-lg bg-card/20">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>to watch your favourite creators :)</CardDescription>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@mosaic.com"
                required
                defaultValue={loginEmail}
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="Enter your username"
                required
                onChange={(e) => {
                  setLoginUsername(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row items-end gap-2">
              <div className="flex-1">
                <Label htmlFor="walletAddress">Wallet Address</Label>
                <Input
                  id="walletAddress"
                  type="text"

                  placeholder="0xh1th3r3"
                  required
                  value={address}
                  readOnly
                />
              </div>
              <Button
                onClick={() => connect({ connector: connectors[0] })}
                size={"icon"}
                variant={"outline"}
              >
                <img src={metamask} className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? <Spinner className="w-6 h-6" /> : "Login"}
            </Button>
            <Link
              to="/onboard"
              className="text-xs pt-4 -mb-2 font-medium text-white/40 transition-all duration-200 hover:text-white/70"
            >
              Don't have an account?
            </Link>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
