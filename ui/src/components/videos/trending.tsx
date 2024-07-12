import axios from "axios";
import { useEffect } from "react";
import { GET_VIDEOS_API } from "@/lib/endpoints";
import { Link } from "react-router-dom";
import { useVideoDataStore } from "@/hooks/useStore";

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

  const {videos: videoData} = useVideoDataStore();

  useEffect(() => {
    console.log(videoData);
  }, [videoData])
  
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold">Trending Today</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols:4 gap-4">
        {videoData.map((video) => (
          <Link to={`/play?v=${video.id}`}>
            <div key={video.id} className="py-4 rounded-md ">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{video.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {video.description}
              </p>
              <p className="mt-2 text-base text-primary"> {video.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
