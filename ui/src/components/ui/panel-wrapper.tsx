import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/ui/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useMenuStore } from "@/hooks/use-menu-store";

export default function PanelWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useMenuStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-screen bg-card py-4 px-6 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px] ml-40" : "lg:ml-72 ml-40"
        )}
      >
        {children}
      </main>
    </>
  );
}
