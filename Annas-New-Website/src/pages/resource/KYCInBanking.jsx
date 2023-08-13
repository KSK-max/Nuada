import { Footer } from "@/widgets/layout";
import React from "react";
import { Typography } from "@material-tailwind/react";

function Resource() {
  return (
    <>
      <div className="flex min-h-[60vh] flex-col gap-8 px-8 py-20">
        <Typography variant="h2">KYC in banking</Typography>
        <div className="h-[2px] w-full bg-primary-blue"></div>
        <Typography variant="paragraph">
          <a
            href="https://www.bankofireland.com/help-centre/faq/identification-documents-need-open-current-account/"
            target="_blank"
            className="text-primary-turquoise"
          >
            KYC
          </a>{" "}
          stands for “Know Your Customer” and is a process that banks and other
          financial institutions use to verify the identity of their customers
          and assess potential risks associated with doing business with them.
          The main objectives of KYC are to prevent money laundering, terrorism
          financing, fraud, and other financial crimes. The KYC process
          typically involves collecting and verifying a range of information
          about the customer, such as their name, address, date of birth,
          occupation, source of funds, and purpose of the transaction. This
          information is then used to assess the customer’s risk profile and
          determine the level of due diligence required. KYC procedures may
          include: Customer identification: Banks are required to verify the
          identity of their customers using reliable and independent documents,
          data, or information. Customer due diligence: Banks are required to
          assess the potential risks associated with doing business with a
          particular customer, and to conduct enhanced due diligence for
          high-risk customers, such as politically exposed persons (PEPs) or
          customers from high-risk countries. Ongoing monitoring: Banks are
          required to monitor their customers’ transactions and activities on an
          ongoing basis to detect any unusual or suspicious activity, and to
          report any suspicious transactions to the relevant authorities. KYC is
          a legal requirement in many countries and is an important part of a
          bank’s compliance and risk management framework. It helps to protect
          banks and their customers from financial crime, and to maintain the
          integrity of the financial system.
        </Typography>
      </div>
      <Footer />
    </>
  );
}

export default Resource;
