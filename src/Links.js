import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";


export const Links = [
  {
    id: 1,
    to: "/",
    name: "Home",
  },
  {
    id: 2,
    to: "/about",
    name: "About",
  },
  {
    id: 3,
    to: "/projects",
    name: "Projects",
  },
  {
    id: 4,
    to: "/contact",
    name: "Contact",
  },
  {
    id: 5,
    to: "/profile",
    name: "Profile",
  },
];


export const Social = [
  {
    id: 1,
    icon: <FaFacebook />,
    url: "https://www.facebook.com/zuzim.ajo",
  },
  {
    id: 2,
    icon: <GrTwitter />,
    url: "https://twitter.com/itsmeKoizumi",
  },
  {
    id: 3,
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/zuzim-ajo-3567a9210/",
  },
];
