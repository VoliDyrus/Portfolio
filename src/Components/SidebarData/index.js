import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

export const SidebarData = [
  {
    id: 1,
    title: "home",
    icon: <HomeIcon />,
    url: "#home",
  },
  {
    id: 2,
    title: "About Me",
    icon: <AccountCircleIcon />,
    url: "#about",
  },
  {
    id: 3,
    title: "Resume",
    icon: <AssignmentRoundedIcon />,
    url: "#resume",
  },
  {
    id: 4,
    title: "My Work",
    icon: <ViewInArIcon />,
    url: "#work",
  },
  {
    id: 5,
    title: "Contacts",
    icon: <CallIcon />,
    url: "#contacts",
  },
];
