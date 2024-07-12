import NavBar from "@/components/navbar";
import Trending from "@/components/videos/trending";

export default function Videos() {
  return (
    <div className="h-screen w-[72vw] mx-auto pt-4 text-left">
      <NavBar />
      <Trending />
    </div>
  );
}
