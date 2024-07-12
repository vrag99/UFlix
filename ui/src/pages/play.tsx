import NavBar from "@/components/navbar";
import Player from "@/components/play/player";
import MetaData from "@/components/play/metadata";
import Comments from "@/components/play/comments";

import { useSearchParams } from "react-router-dom";
import { useVideoDataStore } from "@/hooks/useStore";

export default function Play() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const { videos: videoData } = useVideoDataStore();

  const video = videoData.find((v) => v.id === videoId);

  return (
    <div className="h-screen w-[72vw] mx-auto pt-4 text-left">
      <NavBar />
      {video ? (
        <>
          <Player ipfsHash={video.ipfsHash} />
          <MetaData
            title={video.title}
            description={video.description}
            username={video.username}
            address={video.address}
            likes={video.likes}
          />
          <Comments comments={video.comments} />
        </>
      ) : (
        <h1>Video not found</h1>
      )}
    </div>
  );
}
