
export function VideoComponent({ ipfsHash }: { ipfsHash: string }) {
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
