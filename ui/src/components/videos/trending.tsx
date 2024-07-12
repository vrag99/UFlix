import axios from "axios";
import { useEffect } from "react";
import { GET_VIDEOS_API } from "@/lib/endpoints";
import { useVideoDataStore } from "@/hooks/useStore";
import FreeVideoCard from "./free-video-card";
import PaidVideoCard from "./paid-video-card";

export default function Trending() {
  useEffect(() => {
    const fetchVideos = () => {
      axios
        .get(GET_VIDEOS_API, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchVideos();
  });

  const { videos: videoData } = useVideoDataStore();

  useEffect(() => {
    console.log(videoData);
  }, [videoData]);

  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold">Trending Today</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols:4 lg:gap-5">
        {videoData.map((video, index) => (
          <>
            {video.type === "free" ? (
              <FreeVideoCard key={index} video={video} />
            ) : (
              <PaidVideoCard key={index} video={video} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
