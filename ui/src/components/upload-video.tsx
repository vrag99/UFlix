import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import Spinner from "./ui/spinner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import woods from '@/assets/thumbnails/woods.png'

import { useEffect, useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { toast } from "./ui/use-toast";
import { useVideoDataStore } from "@/hooks/useStore";
export default function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<File>();
  const [video, setVideo] = useState<File>();
  const [ipfsHashContract, setIpfsHashContract] =
    useState<ethers.BaseContract | null>(null);
  const contractAddress = "0xc4258543178792FAEe014be2bB36A09429AFE3c5";
  const [uploading, setUploading] = useState(false);
  const abi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_hash",
          type: "string",
        },
      ],
      name: "setHash",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_user",
          type: "address",
        },
      ],
      name: "getHash",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "user_hash",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const { addVideo } = useVideoDataStore();

  async function setHash(hash: string) {
    if (!ipfsHashContract) return console.error("Contract not initialized");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // Some error
    const tx = await ipfsHashContract.setHash(hash);
    await tx.wait();
    console.log(`Hash set to: ${hash}`);
  }

  useEffect(() => {
    const privateKey =
      import.meta.env.VITE_METAMASK_PVT_KEY;
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mevm.devnet.m1.movementlabs.xyz"
    );
    const wallet = new ethers.Wallet(privateKey, provider);
    setIpfsHashContract(new ethers.Contract(contractAddress, abi, wallet));
  }, []);

  const thumbnailSubmit = async () => {
    const formData = new FormData();
    if (!thumbnail) return;
    formData.append("thumbnail", thumbnail);

    const res = await axios.post(
      `${
        import.meta.env.VITE_BACKEND_URI
      }/video/uploadThumbnail/${title}/${description}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    return res.data.data.id;
  };
  const videoSubmit = async (val: number) => {
    setUploading(true);
    const formData = new FormData();
    if (!video) return;
    formData.append("video", video);
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URI}/video/upload/${val}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    console.log(res);
    setHash(res.data.hash);
    toast({
      description: "Video uploaded successfully",
    });

    addVideo({
      id: "50",
      title: title,
      description: description,
      thumbnail: woods,
      ipfsHash: res.data.hash,
      likes: 0,
      comments: [],
      username: "c1c4d4",
      address: "0x5B281eA3dA7731699EEbF0A034e800bC8e9b722D",
    });

    setUploading(false);
  }


  const handleSubmit = async () => {

    thumbnailSubmit()
      .then(async (val) => {
        await videoSubmit(val);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const [paid, setPaid] = useState(false);
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"icon"} className="rounded-full" variant={"secondary"}>
          <UploadIcon className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Upload Video</DialogTitle>
          <DialogDescription>
            Add a title, description, thumbnail, and video to upload.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter a title"
              className="w-full"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter a description"
              className="w-full"
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <Input
              id="thumbnail"
              type="file"
              className="w-full"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => setThumbnail(e.target.files?.[0])}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="video">Video</Label>
            <Input
              id="video"
              type="file"
              className="w-full"
              onChange={(e) => setVideo(e.target.files?.[0])}
              accept=".mp4"
            />
          </div>
          <div>
            <RadioGroup className="inline-flex gap-4">
              <div className="flex items-center space-x-1">
                <RadioGroupItem onClick={() => setPaid(true)} value="paid" id="paid" />
                <Label htmlFor="paid">Paid</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem onClick={() => setPaid(false)} value="unpaid" id="unpaid" />
                <Label htmlFor="unpaid">UnPaid</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="w-full rounded-md bg-muted p-4 flex flex-row">
          <p>Fees</p>
          <p className="ml-auto">
            {paid ? "~ 0.007" : "0.00"} MOV
          </p>
        </div>
        <DialogFooter>
          <Button
            disabled={uploading}
            onClick={handleSubmit}
            className="w-full"
          >
            {uploading ? <Spinner className="w-4 h-4" /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
