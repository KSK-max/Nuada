import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import handlePayment from "@/lib/handlePayment";

export function Business() {
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
                  Business Onboard
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-bold text-black">
                      Nuada assists businesses with incoming chargebacks.
                      <br />
                      <br />
                      A business reply to a chargeback is a representment.
                      <br />
                      <br />
                      It consists of gathering the necessary evidence and
                      documentation to build strong unbiased case in a specific
                      manner.
                      <br />
                      <br />
                      Representment allows a business to return profit from up
                      to 80% of disputed sales.
                      <br />
                      <br />
                      Our team analyzes transaction data, customer
                      communication, and relevant documentation to compile a
                      case with compelling evidence that supports the business’s
                      position.
                      <br />
                      <br />
                      This comprehensive approach enhances the chances of a
                      favorable resolution.
                      <br />
                      <br />
                      When working with Nuada your business gets:
                      <br />
                      <br />
                      Representment letters.
                      <br />
                      Chargeback mitigation plan.
                      <br />
                      Chargeback ratio report.
                      <br />
                      Dispute Risk Assessment.
                    </Typography>
                    <div className="flex justify-center">
                      <Button
                        color="blue"
                        variant="filled"
                        className="bg-primary-blue text-lg"
                        onClick={() =>
                          handlePayment("price_1NctpTEqdJXeTzZ31O03QqlA")
                        }
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

export default Business;
