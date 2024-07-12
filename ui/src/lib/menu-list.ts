import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Video,
  Upload,
  SettingsIcon,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/videos",
          label: "Videos",
          active: pathname.includes("/videos"),
          icon: Video,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Actions",
      menus: [
        {
          href: "/upload-video",
          label: "Upload Video",
          active: pathname.includes("/upload-video"),
          icon: Upload,
          submenus: [],
        },
        {
          href: "/governance",
          label: "Governance",
          active: pathname.includes("/governance"),
          icon: SettingsIcon,
          submenus: [],
        },
      ],
    },
  ];
}
