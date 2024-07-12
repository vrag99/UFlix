import { Button } from "@/components/ui/button";
import { Plus, CheckCheckIcon, MoveRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";

type Proposal = {
  title: string;
  description: string;
  hasVoted: boolean;
  type: "copyright" | "unban";
  yesCount: number;
  noCount: number;
  startTime?: Date;
  endTime?: Date;
};

export default function Polls() {

    const sampleProposals: Proposal[] = [
        {
          title: "Extend Copyright for Classic Literature",
          description: "Proposal to extend the copyright period for classic literature to 150 years.",
          hasVoted: false,
          type: "copyright",
          yesCount: 1200,
          noCount: 300,
          startTime: new Date("2024-01-01T00:00:00Z"),
          endTime: new Date("2024-02-01T00:00:00Z"),
        },
        {
          title: "Unban User 'JohnDoe123'",
          description: "Proposal to unban user 'JohnDoe123' from the platform due to reformed behavior and apology.",
          hasVoted: true,
          type: "unban",
          yesCount: 450,
          noCount: 50,
          startTime: new Date("2024-03-01T00:00:00Z"),
          endTime: new Date("2024-03-15T00:00:00Z"),
        },
        {
          title: "Shorten Copyright Period for Digital Media",
          description: "Proposal to shorten the copyright period for digital media to 50 years.",
          hasVoted: false,
          type: "copyright",
          yesCount: 800,
          noCount: 700,
          startTime: new Date("2024-04-01T00:00:00Z"),
          endTime: new Date("2024-05-01T00:00:00Z"),
        },
        {
          title: "Unban User 'JaneSmith456'",
          description: "Proposal to unban user 'JaneSmith456' who was banned for spamming but has shown remorse.",
          hasVoted: false,
          type: "unban",
          yesCount: 300,
          noCount: 200,
          startTime: new Date("2024-06-01T00:00:00Z"),
          endTime: new Date("2024-06-15T00:00:00Z"),
        },
        {
          title: "Renew Copyright for Historical Films",
          description: "Proposal to renew the copyright protection for historical films from the early 20th century.",
          hasVoted: true,
          type: "copyright",
          yesCount: 1000,
          noCount: 150,
          startTime: new Date("2024-07-01T00:00:00Z"),
          endTime: new Date("2024-08-01T00:00:00Z"),
        },
      ];
  

  return (
    <div className="pr-4 pt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-muted-foreground font-semibold">
          Proposals
        </h1>
        <AddProposal />
      </div>
      <div className="space-y-4 mt-4">
        {sampleProposals.map((proposal) => (
          <ProposalCard key={proposal.title} proposal={proposal} />
        ))}
      </div>
    </div>
  );
}

function AddProposal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //TODO: Add proposal to the governance
    e.preventDefault();
    console.log(title, description);
  };

  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <Button size={"icon"} className="rounded-full">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a proposal</DialogTitle>
          <DialogDescription>
            You can add a proposal to the governance.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              className="w-full border rounded-md p-2 text-sm"
              placeholder="Proposal title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              className="w-full border rounded-md p-2 text-sm"
              placeholder="Proposal description (a one liner to describe the proposal)"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="link">Video Link</Label>
            <Input id="link" type="text" className="w-full text-sm" />
          </div>
          <div>
            <RadioGroup className="inline-flex gap-4">
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="unban" id="unban" />
                <Label htmlFor="unban">Unban</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="copyright" id="copyright" />
                <Label htmlFor="copyright">Copyright</Label>
              </div>
            </RadioGroup>
          </div>
          <Button size={"default"} className="mt-4">
            Add Proposal
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function ProposalCard({ proposal }: { proposal: Proposal }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div className="space-y-1">
            <CardTitle className="text-muted-foreground">
              {proposal.title}
            </CardTitle>
            <CardDescription>{proposal.description}</CardDescription>
            <Badge className="mt-2">
                {proposal.type === "unban" ? "Unban" : "Copyright"}
            </Badge>
          </div>
          {proposal.hasVoted ? (
            <span className="inline-flex font-semibold text-muted-foreground">
              <CheckCheckIcon className="w-8 text-primary" />
              Voted{" "}
            </span>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="inline-flex items-center gap-4"
            >
              <RadioGroup className="inline-flex gap-4">
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
              <Button size={"iconSm"} className="rounded-full">
                <CheckCheckIcon className="w-4" />
              </Button>
            </form>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <VoteChart yesCount={proposal.yesCount} noCount={proposal.noCount} />
        {proposal.startTime && proposal.endTime && (
          <TimeLine startTime={proposal.startTime} endTime={proposal.endTime} />
        )}
      </CardContent>
    </Card>
  );
}

function VoteChart({
  yesCount,
  noCount,
}: {
  yesCount: number;
  noCount: number;
}) {
  const yesPercentage =
    ((yesCount / (yesCount + noCount)) * 100).toFixed(0) + "%";
  const noPercentage =
    ((noCount / (yesCount + noCount)) * 100).toFixed(0) + "%";

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="w-50 border p-4 rounded-sm">
        <p className="inline-flex font-semibold gap-2">
          Yes <MoveRight className="w-4" /> {yesCount}{" "}
          <span className="text-muted-foreground">({yesPercentage})</span>
        </p>
      </div>
      <div className="w-50 border p-4 rounded-sm">
        <p className="inline-flex font-semibold gap-2">
          No <MoveRight className="w-4" /> {noCount}{" "}
          <span className="text-muted-foreground">({noPercentage})</span>
        </p>
      </div>
    </div>
  );
}

function TimeLine({ startTime, endTime }: { startTime: Date; endTime: Date }) {
  return (
    <div className="flex items-center justify-center font-medium bg-accent text-muted-foreground p-2 rounded-md gap-2">
      {startTime.toLocaleString()} <MoveRight /> {endTime.toLocaleString()}
    </div>
  );
}
