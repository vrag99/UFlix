import Player from "@/components/play/player";
import MetaData from "@/components/play/metadata";
import Comments from "@/components/play/comments";

import PanelWrapper from "@/components/ui/panel-wrapper";

import { useSearchParams } from "react-router-dom";
import { video } from "@/lib/types";
import { useEffect, useState } from "react";
import { FETCH_VIDEO_BY_ID } from "@/lib/endpoints";
import axios from "axios";
import { config } from "@/wagmi-config";
import { videoABI } from "@/lib/ContractsVideo";
import { VIDEO } from "@/lib/ContractAddress";
import { readContract } from "@wagmi/core";
import { useAccount } from "wagmi";
import Spinner from "@/components/ui/spinner";

export default function Play() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("video");
  const [video, setVideo] = useState<video | null>(null);
  const [videoIpfsHash, setVideoIpfsHash] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const fetchVideo = async () => {
    const res = await axios.get(FETCH_VIDEO_BY_ID(Number(videoId)), {
      withCredentials: true,
    });
    console.log(res.data.data);
    setVideo(res.data.data);
  };
  const { address } = useAccount();
  const fetchIpfsHash = async () => {
    if (!address) return;
    if (!video) return;
    const result = await readContract(config, {
      abi: videoABI,
      address: VIDEO,
      functionName: "getIpfsHash",
      args: [BigInt(video.blockChainId - 1), address],
    });
    console.log(result);
    setVideoIpfsHash(result[0]);
  };
  useEffect(() => {
    fetchVideo();
  }, [address]);
  useEffect(() => {
    if (video) fetchIpfsHash().finally(() => setLoading(false));
  }, [video]);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen grid place-items-center">
          <Spinner className="w-6 h-6" />
        </div>
      ) : (
        <PanelWrapper>
          {video?.paid && videoIpfsHash && (
            <>
              <Player ipfsHash={videoIpfsHash} />
              <MetaData
                title={video.Title}
                description={video.Description}
                username={video.username}
                address={video.walletAddress}
                likeCount={video.likeCount}
                videoId={video.id}
              />
              <Comments comments={video.comments} />
            </>
          )}
        </PanelWrapper>
      )}
    </>
  );
}
