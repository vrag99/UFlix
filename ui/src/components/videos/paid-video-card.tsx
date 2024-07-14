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
import { useEffect, useState } from "react";
import { useAccount, useConnect, useWriteContract } from "wagmi";
import metamaskIcon from "@/assets/metamask.svg";
import Spinner from "../ui/spinner";
import { Link } from "react-router-dom";
import { readContract, writeContract, simulateContract } from '@wagmi/core'
import { videoABI as abi } from "@/lib/ContractsVideo";
import { config } from "@/wagmi-config";
import { VIDEO } from "@/lib/ContractAddress";
import { useToast } from "../ui/use-toast";
import { FEES } from "@/lib/constant";



export default function PaidVideoCard({ video }: { video: video }) {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const [isPaid, setIsPaid] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const { writeContractAsync } = useWriteContract()

  const fetchHasPaid = async () => {
    if (!address) return;
    const result = await readContract(config, {
      abi,
      address: VIDEO,
      functionName: "hasVideoPaidForVideo",
      args: [
        BigInt(video.blockChainId - 1),
        address
      ]
    })
    console.log(result)
    setIsPaid(result);
  };

  const { toast } = useToast()

  useEffect(() => {
    fetchHasPaid();
  }, [address]);

  const handlePay = async () => {
    if (!address) return;
    setIsLoading(true);
    writeContractAsync({
      abi,
      address: VIDEO,
      functionName: "payForVideo",
      args: [
        BigInt(video.blockChainId - 1),
      ],
      value: BigInt(BigInt(video.fees * 10 ** 18) + FEES)
    }, {
      onSuccess(data, variables, context) {
        setIsLoading(false);
      },
    }).then((txHash: string) => {
      toast({ description: "Transaction sent successfully" + txHash })
    }).catch((error: any) => {
      console.log(error)
    }).finally(() => {
      setIsLoading(false);
    })
  };

  return (
    <>
      <>{isPaid ? (
        <Link to={`/play/?video=${video.id}`}>
          <VideoCard video={video} />
        </Link>
      ) : (
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
              <p>Fees</p>
              <div className="w-full bg-muted rounded-md p-2 px-4 flex justify-between">
                <p className="font-semibold w-full">{(BigInt(video.fees * 10 ** 9) + FEES).toString()} <p className="text-primary">gUBIT</p></p>
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
                <Button size={"lg"} onClick={handlePay} disabled={loading}>
                  {loading ? <Spinner className="w-4 h-4" /> : "Pay to Watch"}
                </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      )}</>
    </>
  );
}
