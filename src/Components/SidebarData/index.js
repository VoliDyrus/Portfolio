import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

export const SidebarData = [
  {
    title: "home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "About Me",
    icon: <AccountCircleIcon />,
    link: "/about-me",
  },
  {
    title: "Resume",
    icon: <AssignmentRoundedIcon />,
    link: "/resume",
  },
  {
    title: "My Work",
    icon: <ViewInArIcon />,
    link: "/my-work",
  },
  {
    title: "Contacts",
    icon: <CallIcon />,
    link: "/contacts",
  },
];
