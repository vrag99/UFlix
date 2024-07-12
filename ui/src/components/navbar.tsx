import createWeb3Avatar from "web3-avatar";
import { useEffect } from "react";
import logo from "@/assets/logo.svg";
import UploadVideo from "./upload-video";
import { Bolt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NavBar() {
  useEffect(() => {
    createWeb3Avatar("#avatar", "0x11Ed0AC7D6142481E459B6e5d4bfB5646277796f");
  }, []);
  return (
    <>
      <header className="flex items-center justify-between bg-background py-1">
        <Link to="/videos">
          <img src={logo} alt="logo" className="w-16" />{" "}
        </Link>
        <div className="flex flex-row gap-2">
          <Link to="/governance">
            <Button
              className="rounded-full"
              size={"icon"}
              variant={"secondary"}
            >
              <Bolt size={16} />
            </Button>
          </Link>
          <UploadVideo />
          <div className="flex items-center gap-2 border-l rounded-md px-3 py-1.5">
            <div id="avatar" className="w-6 h-6 rounded-full"></div>
            <span className="text-xs">c1c4d4</span>
          </div>
        </div>
      </header>
    </>
  );
}
