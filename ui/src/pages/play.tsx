import Player from "@/components/play/player";
import MetaData from "@/components/play/metadata";
import Comments from "@/components/play/comments";

import PanelWrapper from "@/components/ui/panel-wrapper";

import { useSearchParams } from "react-router-dom";
import { useVideoDataStore } from "@/hooks/useStore";

export default function Play() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const { videos: videoData } = useVideoDataStore();

  const video = videoData.find((v) => v.id === videoId);

  return (
    <PanelWrapper>
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
    </PanelWrapper>
  );
}
