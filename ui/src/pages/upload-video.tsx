import PanelWrapper from "@/components/ui/panel-wrapper";
import UploadVideoCard from "@/components/upload-video-card";

export default function UploadVideo() {
  return (
    <PanelWrapper>
      <div className="max-w-[72vw] mx-auto gap-8 h-[90vh] grid grid-cols-2 place-items-center">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center font-bold mb-2">
            Show yourself to the internet :)
          </h1>
          <p className="text-muted-foreground">
            Upload a video showcasing your talent
          </p>
        </div>
        <UploadVideoCard />
      </div>
    </PanelWrapper>
  );
}
