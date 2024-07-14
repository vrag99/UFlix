import { type video } from "@/lib/types";
import Davatar from "@davatar/react";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { CircleDollarSign } from "lucide-react";

export default function VideoCard({ video }: { video: video }) {
  return (
    <div className="py-4 rounded-md ">
      <img
        src={"http://localhost:8080/ipfs/"+video.ipfsHashThumbnail}
        alt={video.Title}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{video.Title}</h2>
        <p className="text-sm text-muted-foreground">{video.Description}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <Badge variant={"outline"}>{video.tag}</Badge>
        <Badge>
          {video.paid}{" "}
          {video.paid && (
            <CircleDollarSign className="ml-1" size={14} />
          )}
        </Badge>
      </div>
      <div className="flex flex-row items-center justify-between mt-2 pr-2">
        <div className="flex flex-row items-end gap-2">
          <Davatar address={video.walletAddress} size={24} />
          <p className="mt-2 text-base font-bold brightness-150 text-primary">
            {video.username}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Heart size={16} />
          <p className="text-sm text-muted-foreground">{video.likeCount}</p>
        </div>
      </div>
    </div>
  );
}
