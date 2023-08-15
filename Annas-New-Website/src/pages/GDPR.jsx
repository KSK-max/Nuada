import { Footer } from "@/widgets/layout";
import { Typography } from "@material-tailwind/react";

function TermsAndConditions() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center py-4">
        <Typography variant="h2" className="text-center">
          GDPR
        </Typography>
        <Typography variant="paragraph" className="mt-6">
          At Nuada, we take data privacy and protection seriously. We are
          committed to complying with the General Data Protection Regulation
          (GDPR) and other applicable data protection laws and regulations to
          ensure the confidentiality, integrity, and security of personal data.
          <br />
          <br />
          As a consulting company, we may collect and process personal data as
          part of our client engagement and service delivery. This may include
          information such as names, contact details, and other relevant data
          necessary for the provision of our services.
          <br />
          <br />
          We handle personal data in a lawful and transparent manner, with a
          clear purpose for processing and a legitimate basis as defined by the
          GDPR. We collect and process personal data only to the extent
          necessary to fulfill our contractual obligations or to provide
          information and services requested by our clients.
          <br />
          <br />
          We implement appropriate technical and organizational measures to
          protect personal data from unauthorized access, loss, alteration, or
          disclosure. We ensure that our employees and any third-party service
          providers involved in the processing of personal data are aware of
          their obligations and adhere to strict confidentiality requirements.
          <br />
          <br />
          We retain personal data for the duration necessary to fulfill the
          purposes for which it was collected, unless a longer retention period
          is required by law. Once the retention period expires, we securely and
          permanently dispose of personal data.
          <br />
          <br />
          As an individual, you have certain rights regarding your personal
          data, including the right to access, rectify, erase, restrict
          processing, and object to the processing of your personal data. If you
          wish to exercise any of these rights or have any concerns regarding
          the processing of your personal data, please contact us using the
          contact details provided below.
          <br />
          <br />
          Nuada may share personal data with trusted third parties or service
          providers only to the extent necessary for the provision of our
          services. We ensure that such third parties are compliant with data
          protection regulations and have appropriate safeguards in place.
          <br />
          <br />
          We may also transfer personal data to countries outside the European
          Economic Area (EEA) in accordance with the GDPR requirements. In such
          cases, we take the necessary steps to ensure that adequate safeguards
          are in place to protect the personal data being transferred.
          <br />
          <br />
          For more detailed information about how we collect, use, and protect
          personal data, as well as the rights you have as an individual, please
          refer to our Privacy Policy, available on our website or upon request.
          <br />
          <br />
          If you have any questions, concerns, or requests regarding the
          processing of your personal data or our GDPR compliance, please
          contact us at help@wenauda.ie +35314429200. We are committed to
          addressing any inquiries or concerns promptly and resolving them in a
          fair and transparent manner.
          <br />
          <br />
          Sincerely,
          <br />
          Nuada
        </Typography>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
export default TermsAndConditions;
