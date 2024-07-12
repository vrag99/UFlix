import { comment } from "@/lib/types";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Comments({ comments }: { comments: comment[] }) {
  const [commentSection, setComments] = useState<comment[]>(comments);
  const [commentText, setCommentText] = useState("");
  return (
    <div className="w-fullrounded-md bg-card p-4">
      <h1 className="text-sm text-muted-foreground font-bold">Comments</h1>
      <div>
        <div className="flex flex-row items-baseline gap-2">
          <Input
            type="text"
            placeholder="Add a comment"
            className="w-full flex-1"
            name="comment"
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button
            className="mt-2"
            onClick={() =>
              setComments([
                ...commentSection,
                {
                  text: commentText,
                  username: "c1c4d4",
                  address: "0x1234",
                },
              ])
            }
          >
            Post
          </Button>
        </div>
        {commentSection.map((comment) => (
          <div key={comment.text} className="p-2 bg-white/5 my-2">
            <p className="font-semibold">{comment.username}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
