import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Spinner from "./ui/spinner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


import { useState } from "react";
import axios from "axios";
import { toast } from "./ui/use-toast";

import { videoABI } from "@/lib/ContractsVideo";
import { VIDEO } from "@/lib/ContractAddress";
import { config } from "@/wagmi-config";

import { simulateContract, writeContract } from '@wagmi/core'
import { deleteVideo, updateBlockChainData } from "@/lib/endpoints";
import { useUserStore } from "@/hooks/useStore";


export default function UploadVideoCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<File>();
  const [video, setVideo] = useState<File>();

  const [uploading, setUploading] = useState(false);
  const { user } = useUserStore()


  const thumbnailSubmit = async () => {
    const formData = new FormData();
    if (!thumbnail) return;
    formData.append("thumbnail", thumbnail);
    console.log(`${import.meta.env.VITE_BACKEND_URI}/video/uploadThumbnail/${title}/${description}/${paid}/${fees}`)
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URI}/video/uploadThumbnail/${title}/${description}/${paid}/${fees}`,
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


  const callContract = async (hash: string, videoId: number) => {
    try {
      const { request, result } = await simulateContract(config, {
        abi: videoABI,
        address: VIDEO,
        functionName: "uploadVideo",
        args: [
          hash,
          BigInt(fees * 10 ** 18),
          paid
        ],
      }
      )
      const txhash = writeContract(config, request)
        .then(async (_) => {
          const blockChainId = Number(result);
          try {
            const res = await axios.post(updateBlockChainData, {
              videoId,
              blockChainId
            }, {
              withCredentials: true
            })
            toast({
              description: "Video Uploaded successfully" + txhash,
            })
          } catch (err) {
            const del = await axios.delete(deleteVideo(videoId), {
              withCredentials: true
            })
            toast({ description: "Error updating blockchain id. Please upload video again", variant: "destructive" });
            console.error(err);
          }

        })
        .catch((err) => {
          console.error(err);
        });
      toast({ description: "Transaction submitted: " + hash });
    } catch (err) {
      console.error(err);
    }
  }


  const videoSubmit = async (val: number) => {
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
    if (paid)
      await callContract(res.data.hash, val)
    toast({
      description: "Video uploaded successfully",
    });

    setUploading(false);
  };

  const handleSubmit = async () => {
    setUploading(true);
    thumbnailSubmit()
      .then(async (val) => {
        await videoSubmit(val);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const [paid, setPaid] = useState(false);
  const [fees, setFees] = useState(0);
  return (
    <Card className="sm:max-w-[500px]">
      <CardHeader>
        <CardTitle>Upload Video</CardTitle>
        <CardDescription>
          Add a title, description, thumbnail, and video to upload.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
          <div className="my-4">
            <RadioGroup className="inline-flex gap-4">
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  onClick={() => setPaid(true)}
                  value="paid"
                  id="paid"
                />
                <Label htmlFor="paid">Paid</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  onClick={() => setPaid(false)}
                  value="unpaid"
                  id="unpaid"
                />
                <Label htmlFor="unpaid">UnPaid</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="w-full rounded-md bg-accent mb-4 p-4 flex flex-row">
          <Input
            id="title"
            placeholder="Enter cost"
            className="w-full"
            onChange={(e) => setFees(Number(e.target.value))}
            disabled={!paid}
          />
        </div>

        <Button disabled={uploading} onClick={handleSubmit} className="w-full">
          {uploading ? <Spinner className="w-4 h-4" /> : "Upload"}
        </Button>
      </CardContent>
    </Card>
  );
}
