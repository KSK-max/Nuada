import { Home, Profile, SignIn, Register } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Diy from "./pages/diy";
import Business from "./pages/Business";
import Individual from "./pages/Individual";
import Success from "./pages/Success";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  { name: "success", path: "/success", element: <Success /> },
  {
    // icon: UserCircleIcon,
    name: "Soultions",
    path: "/profile",
    element: <Profile />,
  },
  {
    // icon: UserCircleIcon,
    name: "Resources",
    path: "/profile",
    element: <Profile />,
  },
  {
    // icon: UserCircleIcon,
    name: "About Us",
    path: "/profile",
    element: <Profile />,
  },
  // {
  //   icon: ArrowRightOnRectangleIcon,
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   icon: UserPlusIcon,
  //   name: "Register",
  //   path: "/register",
  //   element: <Register />,
  // },

  // {
  //   icon: UserPlusIcon,
  //   name: "User",
  //   path: "/userDetails",
  //   element: <UserDetails />,
  // },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
  {
    // name:"Diy",
    path: "/diy",
    element: <Diy />,
  },
  {
    // name:"Business",
    path: "/business",
    element: <Business />,
  },
  {
    // name:"Individual",
    path: "/individual",
    element: <Individual />,
  },
];

export default routes;
