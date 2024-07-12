import Polls from "@/components/governance/polls";
import PanelWrapper from "@/components/ui/panel-wrapper";

export default function Governance() {
  return (
    <PanelWrapper>
      <div className="max-w-[60vw] mx-auto">
        <h1 className="text-2xl font-bold">Governance Dashboard</h1>
        <Polls />
      </div>
    </PanelWrapper>
  );
}
