import { Footer } from "@/widgets/layout";
import React from "react";
import { Typography } from "@material-tailwind/react";

const CONSUMER_LINK =
  "https://aib.ie/content/dam/aib/personal/docs/our-products/credit-cards/aib-personal-credit-card-terms-and-conditions.pdf";

function Resource() {
  return (
    <>
      <div className="flex min-h-[60vh] flex-col gap-8 px-8 py-20">
        <Typography variant="h2">Consumer obligations towards banks</Typography>
        <div className="h-[2px] w-full bg-primary-blue"></div>
        <Typography variant="paragraph">
          <a
            href={CONSUMER_LINK}
            target="_blank"
            className="text-primary-turquoise"
          >
            Consumers
          </a>{" "}
          also have obligations towards banks, which include:
          <br /><br />
          Providing Accurate Information: Consumers must provide accurate and complete
          information when applying for a bank account or financial product, such as their
          name, address, and financial information.
          <br /><br />
          Complying with Terms and Conditions: Consumers must comply with the terms and
          conditions of their bank account or financial product, including any fees or charges
          associated with the account.
          <br /><br />
          Reporting Suspected Fraud or Unauthorized Transactions: Consumers must report
          any suspected fraud or unauthorized transactions on their account to the bank as
          soon as possible.
          <br /><br />
          Protecting Personal Information: Consumers must take reasonable steps to protect
          their personal and financial information from fraud and unauthorized access, such as
          keeping their PIN and passwords secure.
          <br /><br />
          Not Engaging in Illegal Activity: Consumers must not engage in illegal activities,
          such as money laundering, fraud, or other financial crimes, using their bank account
          or financial product.
          <br /><br />
          Honoring Financial Obligations: Consumers must honor their financial obligations,
          such as repaying loans or credit card balances on time and in full.
          <br /><br />
          Overall, consumers have a responsibility to act in good faith when dealing with their
          bank and to comply with all applicable laws and regulations.
        </Typography>
      </div>
      <Footer />
    </>
  );
}

export default Resource;
