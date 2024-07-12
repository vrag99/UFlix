import NavBar from "@/components/navbar";
import Polls from "@/components/governance/polls";

export default function Governance() {
  return (
    <div className="h-screen w-[72vw] mx-auto pt-4">
        <NavBar />
        <h1 className="text-2xl font-bold">Governance Dashboard</h1>
        <Polls />
    </div>
  );
}