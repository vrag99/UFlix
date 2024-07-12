
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Player from "video.js/dist/types/player";
import { useRef } from "react";

export function VideoComponent({ ipfsHash }: { ipfsHash: string }) {
  const playerRef = useRef<Player | null>(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "http://localhost:8080/ipfs/QmSRtfAGepo2eCcu9gCtkFw2TSU6v4R897o3oxQ6b8NYKh?",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className="w-full">
      <video controls>
        <source
          src={`http://localhost:8080/ipfs/${ipfsHash}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
