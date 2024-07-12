import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.svg";
import leadBg from "@/assets/lead-bg.webp";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-card">
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <img src={logo} className="w-48 mx-auto mb-0" alt="Logo" />
            <p className="mb-3 text-xl text-muted-foreground">
              Lights, Camera,{" "}
              <span className="text-primary font-semibold">UFlix!</span>
            </p>
            <Button
              onClick={() => navigate("/login")}
              className="mt-3"
              variant={"shine"}
              size={"lg"}
            >
              Get Watching
            </Button>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            <img src={leadBg} className="rounded-xl" alt="Image Description" />
            <div className="absolute bottom-12 -start-20 w-48 h-48 bg-gradient-to-b from-primary to-transparent to-[70%] p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20  w-48 h-48 bg-gradient-to-t from-primary to-transparent to-[70%] p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
