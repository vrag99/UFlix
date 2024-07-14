import { VideoComponent } from "./video-component";

export default function Player({ ipfsHash }: { ipfsHash: string }) {
  console.log(ipfsHash);
  return (
    <div className="w-full mt-4 border rounded-md">
      <VideoComponent ipfsHash={ipfsHash} />
    </div>
  );
}
