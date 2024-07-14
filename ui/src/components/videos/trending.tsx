import axios from "axios";
import { useEffect, useState } from "react";
import { GET_VIDEOS_API } from "@/lib/endpoints";
import FreeVideoCard from "./free-video-card";
import PaidVideoCard from "./paid-video-card";
import { video } from "@/lib/types";
import Spinner from "../ui/spinner";

export default function Trending() {
  const [videos, setVideos] = useState<video[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchVideos = () => {
      setLoading(true);
      axios
        .get(GET_VIDEOS_API, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data.data);
          setVideos(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchVideos();
  }, []);

  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold">Videos</h1>
      {loading ? (
        <div className="h-[90vh] w-full grid place-items-center">
          <Spinner className="w-6 h-6" />
        </div>
      ) : videos.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {videos.map((video: video, index: number) => (
            <div key={index}>
              {!video.paid ? (
                <FreeVideoCard video={video} />
              ) : (
                <PaidVideoCard video={video} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-[90vh] flex items-center justify-center mx-auto">
          <h1 className="text-xl font-bold">No videos as of now, be the first one to show your talent :)</h1>
        </div>
      )}
    </div>
  );
}
