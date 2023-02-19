import {
    MissionIcon,
    MoneyIcon,
    CalendarIcon,
    UserIcon,
    FireIcon,
  } from "./Icons";
  
  export const SIDEBAR_DATA = [
    {
      id: 1,
      name: "Create Mission",
      path: "newmission",
      icon: <MissionIcon />,
    },
    {
      id: 2,
      name: "Donate",
      path: "donate",
      icon: <MoneyIcon />,
    },
    {
        id: 3,
        name: "Your Missions",
        path: "yourmissions",
        icon: <CalendarIcon />,
      },
    {
      id: 4,
      name: "Your Donations",
      path: "yourdonations",
      icon: <UserIcon />,
    },
    {
      id: 5,
      name: "Trending Missions",
      path: "trendingmissions",
      icon: <FireIcon />,
    },
  ];