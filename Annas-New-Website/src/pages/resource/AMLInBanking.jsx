import { Footer } from "@/widgets/layout";
import React from "react";
import { Typography } from "@material-tailwind/react";

function Resource() {
  return (
    <>
      <div className="flex min-h-[60vh] flex-col gap-8 px-8 py-20">
        <Typography variant="h2">AML in banking</Typography>
        <div className="h-[2px] w-full bg-primary-blue"></div>
        <Typography variant="paragraph">
          <a
            href="https://www.centralbank.ie/regulation/anti-money-laundering-and-countering-the-financing-of-terrorism"
            target="_blank"
            className="text-primary-turquoise"
          >
            AML
          </a>{" "}
          stands for Anti-Money Laundering, which is a set of laws, regulations,
          and procedures that financial institutions must follow to prevent
          money laundering and other financial crimes.
          <br /><br />
          Money laundering is the process of disguising the proceeds of criminal activity as legitimate
          funds, which can then be used to finance further criminal activity or
          to evade taxes.
          <br /><br />
          AML regulations require financial institutions to
          develop and implement risk-based policies, procedures, and controls to
          detect, prevent, and report money laundering activities.
          <br /><br />
          The main components of an AML program include:
          <br /><br />
          Customer Due Diligence (CDD): Financial institutions are required to identify and verify the
          identity of their customers and to assess the risk of doing business
          with them.
          <br /><br />
          This includes collecting and verifying customer
          identification information, conducting ongoing monitoring of customer
          transactions, and conducting enhanced due diligence for high-risk
          customers.
          <br /><br />
          Suspicious Activity Monitoring and Reporting: Financial
          institutions must monitor customer transactions for unusual or
          suspicious activity and report any suspicious transactions to the
          relevant authorities.
          <br /><br />
          AML Training and Awareness: Financial
          institutions must train their employees on AML laws and regulations
          and maintain an AML program that is up-to-date with regulatory
          requirements.
          <br /><br />
          Record Keeping: Financial institutions must maintain
          accurate records of customer identification information, transactions,
          and AML program activities.
          <br /><br />
          AML Risk Assessment: Financial
          institutions must conduct a periodic risk assessment to identify,
          evaluate, and mitigate AML risks. AML is a critical part of a
          financial institution’s compliance and risk management framework.
          <br /><br />
          AML regulations help to prevent money laundering, terrorism financing,
          fraud, and other financial crimes, and help to maintain the integrity
          of the financial system.
        </Typography>
      </div>
      <Footer />
    </>
  );
}

export default Resource;
