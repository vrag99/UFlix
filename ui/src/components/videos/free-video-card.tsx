import { type video } from "@/lib/types";
import { Link } from "react-router-dom";
import VideoCard from "./commons/video-card";

export default function FreeVideoCard({ video }: { video: video }) {
  return (
    <Link to={`/play?v=${video.id}`}>
      <VideoCard video={video} />
    </Link>
  );
}
