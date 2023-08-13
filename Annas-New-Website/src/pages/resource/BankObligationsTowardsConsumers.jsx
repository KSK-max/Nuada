import { Footer } from "@/widgets/layout";
import React from "react";
import { Typography } from "@material-tailwind/react";

function Resource() {
  return (
    <>
      <div className="flex min-h-[60vh] flex-col gap-8 px-8 py-20">
        <Typography variant="h2">Bank obligations towards consumers</Typography>
        <div className="h-[2px] w-full bg-primary-blue"></div>
        <Typography variant="paragraph">
          <a
            href="https://www.citizensinformation.ie/en/consumer/consumer-laws/your-consumer-rights/"
            target="_blank"
            className="text-primary-turquoise"
          >
            Banks
          </a>{" "}
          have a number of obligations towards consumers, which include:
          Providing Safe and Secure Banking: Banks must take reasonable steps to
          protect consumers’ accounts and personal information from fraud and
          unauthorized access. Disclosure of Fees and Charges: Banks must
          provide consumers with clear and accurate information about the fees
          and charges associated with their products and services. Fair and
          Responsible Lending: Banks must ensure that their lending practices
          are fair, transparent, and responsible, and that they do not engage in
          discriminatory lending practices. Consumer Protection: Banks must
          comply with all applicable laws and regulations related to consumer
          protection, such as the Consumer Credit Act, the Data Protection Act,
          and the Payment Services Regulations. Complaint Handling: Banks must
          have an effective complaints handling process in place to resolve any
          disputes with consumers in a timely and fair manner. Financial
          Education: Banks have a responsibility to provide consumers with
          information and education about financial products and services to
          help them make informed decisions. Overall, banks have a duty of care
          to their customers and are expected to act in the best interests of
          their customers at all times. Failure to meet these obligations can
          result in significant consequences, including fines, legal action, and
          damage to the bank’s reputation.
        </Typography>
      </div>
      <Footer />
    </>
  );
}

export default Resource;
