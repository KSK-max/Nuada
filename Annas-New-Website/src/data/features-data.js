import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "blue",
    title: "DIY",
    icon: StarIcon,
    description:
      "I want to dispute a transaction and I want to do it myself.",
    route: "/diy",

  },
  {
    color: "red",
    title: "Business On Board",
    icon: BriefcaseIcon,
    description: "I want Nuada to take care of my incoming chargebacks.",
      route: "/business",

  },
  {
    color: "teal",
    title: "Individual On Board",
    icon: FingerPrintIcon,
    description: "I want Nuada to put things right in relation to my past loss.",     
    route: "/individual",

  },
];

export default featuresData;
