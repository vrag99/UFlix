import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import VideoCard from "./commons/video-card";
import { type video } from "@/lib/types";
import { useState } from "react";
import { useAccount, useConnect } from "wagmi";
import metamaskIcon from "@/assets/metamask.svg";
import Spinner from "../ui/spinner";
import { Link } from "react-router-dom";

export default function PaidVideoCard({ video }: { video: video }) {
  const [fees, setFees] = useState(0);
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const [isPaid, setIsPaid] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const handlePay = async () => {
    setIsLoading(true);
    console.log("Paying fees...");
    //Idhar likho logic
  };
  return (
    <Dialog>
      <DialogTrigger className="text-left">
        <VideoCard video={video} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            This Video is <span className="text-primary"> Paid</span>
          </DialogTitle>
          <DialogDescription>
            You need to pay a fee to watch this video.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="w-full bg-muted rounded-md p-2 px-4 flex justify-between">
            <p>Fees</p>
            <p className="text-primary font-semibold">{fees} UBIT</p>
          </div>
          <div className="flex flex-row gap-2">
            <Input className="flex-1" type="text" value={address} readOnly />
            <Button
              onClick={() => connect({ connector: connectors[0] })}
              size={"icon"}
              variant={"outline"}
              className=" text-white"
            >
              <img src={metamaskIcon} className="w-4" />
            </Button>
          </div>
        </div>
        <DialogFooter>
          {isPaid ? (
            <Link to={`/video/${video.id}`}>
              <Button
                size={"lg"}
                className="bg-emerald-500 hover:bg-emerald-600"
              >
                Watch Now
              </Button>
            </Link>
          ) : (
            <Button size={"lg"} onClick={handlePay} disabled={loading}>
              {loading ? <Spinner className="w-4 h-4" /> : "Pay to Watch"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
