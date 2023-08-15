import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import handlePayment from "@/lib/handlePayment";

export function Individual() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
          <div className="px-6">
            <div className="flex flex-col flex-wrap justify-center">
              <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                <div className="relative">
                  <div className="-mt-20 w-40"></div>
                </div>
              </div>

              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Individual Onboard
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-bold text-black">
                      Our team provides personalised assessment and roadmap.
                      <br />
                      <br />
                      There are a maximum of 3 Stages in Alternative Dispute
                      Resolution, Nuada can take Your case through.
                      <br />
                      Every case starts with 1st Stage, depending on the result
                      – you decide to proceed or not.
                      <br />
                      <br />
                      1st Stage includes proof of work on:
                      <br />
                      <br />
                      Bank statement review – servicing branch determination,
                      card brand plan determination, out of the pattern
                      transaction analysis. Merchant due diligence – funds
                      recipient background check, blacklists, reviews,
                      beneficiaries.
                      <br />
                      Money tracing – define recipients, summarise disputed
                      loss, extract recipient accounts.
                      <br />
                      Evidence gathering – collect communication trails.
                      <br />
                      Personalised roadmap.
                      <br />
                      Payment dispute – electronic document.
                      <br />
                      Outcome assessment.
                    </Typography>
                    <div className="flex justify-center">
                      <Button
                        color="blue"
                        variant="filled"
                        className="bg-primary-blue text-lg"
                        onClick={() =>
                          handlePayment("price_1NctqfEqdJXeTzZ3tWiMQkQL")
                        }
                      >
                        Onboard
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

export default Individual;
