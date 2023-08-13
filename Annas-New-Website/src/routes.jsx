import { Home, Profile } from "@/pages";
import { HomeIcon } from "@heroicons/react/24/solid";
import Diy from "./pages/diy";
import Business from "./pages/Business";
import Individual from "./pages/Individual";
import Success from "./pages/Success";
import Resources from "./pages/Resources";
import ConsumerObligationTowardsBanks from "./pages/resource/ConsumerObligationTowardsBanks";
import BankObligationsTowardsConsumers from "./pages/resource/BankObligationsTowardsConsumers";
import MerchantDueDiligenceByBanks from "./pages/resource/MerchantDueDiligenceByBanks";
import AMLInBanking from "./pages/resource/AMLInBanking";
import KYCInBanking from "./pages/resource/KYCInBanking";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/",
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
    path: "/resources",
    element: <Resources />,
  },

  // RESOURCES \/
  {
    name: "Consumer obligations towards banks",
    path: "/resource/consumer-obligations-towards-banks",
    element: <ConsumerObligationTowardsBanks />,
  },
  {
    name: "Bank obligations towards consumers",
    path: "/resource/bank-obligations-towards-consumers",
    element: <BankObligationsTowardsConsumers />,
  },
  {
    name: "Merchant due diligence by banks",
    path: "/resource/merchant-due-diligence-by-banks",
    element: <MerchantDueDiligenceByBanks />,
  },
  {
    name: "AML in banking",
    path: "/resource/AML-in-banking",
    element: <AMLInBanking />,
  },
  {
    name: "KYC in banking",
    path: "/resource/KYC-in-banking",
    element: <KYCInBanking />,
  },
  // RESOURCES /\

  {
    // icon: UserCircleIcon,
    name: "About Us",
    path: "/profile",
    element: <Profile />,
  },
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
