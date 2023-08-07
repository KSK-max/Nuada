import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import handlePayment from "@/lib/handlePayment";

export function Diy() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const data = [
    {
      label: "Subscribe",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Pay",
      value: "Pay",
      desc: `Use our Stripe integration to pay the money!`,
    },
  ];

  //   useEffect(() => {
  //     fetch("https://nuada.vercel.app/config").then(async (r) => {
  //       const { publishableKey } = await r.json();
  //       console.log(publishableKey);
  //       setStripePromise(loadStripe(publishableKey));
  //     });
  //   }, []);

  //   useEffect(() => {
  //     fetch("https://nuada.vercel.app/create-payment-intent", {
  //       method: "POST",
  //       body: JSON.stringify({}),
  //     }).then(async (result) => {
  //       var { clientSecret } = await result.json();
  //       setClientSecret(clientSecret);
  //     });
  //   }, []);

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                <div className="relative">
                  <div className="-mt-20 w-40"></div>
                </div>
              </div>

              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Do It Yourself
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      DIY allows individuals to save money by taking on tasks
                      yourself instead of hiring professionals. It eliminates
                      labor costs and allows for budget-friendly solution. If
                      you have bought a product or service, if you have
                      invested, if you’ve transacted money by any reason and not
                      happy with the outcome, you have the right to dispute any
                      transaction. Access Nuada’s unique knowledge and necessary
                      insights to navigate the chargeback and dispute process
                      independently, saving time and resources only from €117!
                      Please note this payment is not refundable. You can cancel
                      your next subscription payment by emailing
                      help@wenuada.ie, before new month or in the first 2 days
                      of a new month.
                    </Typography>
                    <div className="flex justify-center">
                      <Button
                        onClick={() =>
                          handlePayment("price_1NcSqdLcCMKnXur8abpFaQmZ")
                        }
                        className="bg-primary-blue text-lg"
                      >
                        Pay
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Diy;
