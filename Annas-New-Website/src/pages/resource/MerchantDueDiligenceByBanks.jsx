import { Footer } from "@/widgets/layout";
import React from "react";
import { Typography } from "@material-tailwind/react";

function Resource() {
  return (
    <>
      <div className="flex min-h-[60vh] flex-col gap-8 px-8 py-20">
        <Typography variant="h2">Merchant due diligence by banks</Typography>
        <div className="h-[2px] w-full bg-primary-blue"></div>
        <Typography variant="paragraph">
          <a
            href="https://stripe.com/fr-us/resources/more/merchant-onboarding-explained#:~:text=Compliance%20and%20risk%20assessment,relevant%20regulations%20and%20industry%20standards"
            target="_blank"
            className="text-primary-turquoise"
          >
            Merchant
          </a>{" "}
          due diligence is a process that banks use to assess the potential
          risks associated with doing business with a merchant. The process
          typically involves collecting and verifying information about the
          merchant, such as their business name, address, legal structure,
          business activities, and financial history. The objective of merchant
          due diligence is to ensure that banks are not inadvertently
          facilitating fraudulent or illegal activities through their
          relationship with the merchant. Merchant due diligence procedures may
          include: Customer Identification: Banks are required to verify the
          identity of their merchant customers using reliable and independent
          documents, data, or information. Business Due Diligence: Banks are
          required to assess the potential risks associated with doing business
          with a particular merchant, and to conduct enhanced due diligence for
          high-risk merchants, such as those in high-risk industries or with a
          history of financial crime. Ongoing Monitoring: Banks are required to
          monitor their merchant customers’ transactions and activities on an
          ongoing basis to detect any unusual or suspicious activity, and to
          report any suspicious transactions to the relevant authorities.
          Compliance and Risk Management: Banks are required to have a robust
          compliance and risk management framework to manage the risks
          associated with their merchant customers, including monitoring the
          merchant’s compliance with relevant laws and regulations. Merchant due
          diligence is an important part of a bank’s compliance and risk
          management framework. It helps to protect banks and their customers
          from financial crime, and to maintain the integrity of the financial
          system.
        </Typography>
      </div>
      <Footer />
    </>
  );
}

export default Resource;
