import { Footer } from "@/widgets/layout";
import { Typography } from "@material-tailwind/react";

function PrivacyPolicy() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center py-4">
        <Typography variant="h2" className="text-center">
          Privacy Policy for Nuada
        </Typography>
        <Typography variant="paragraph" className="mt-6">
          Effective Data: Nov 2020
          <br />
          <br />
          At Nuada, we are committed to protecting the privacy and
          confidentiality of our clients' and website visitors' personal
          information. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your personal data when you interact with our
          consulting services and visit our website. By using our services or
          accessing our website, you consent to the terms of this Privacy
          Policy.
          <br />
          <br />
          Information We Collect
          <br />
          1.1 Personal Information: We may collect personal information that you
          voluntarily provide to us when you engage with our consulting
          services, communicate with us, or visit our website. This may include,
          but is not limited to, your name, email address, phone number, job
          title, and company name.
          <br />
          <br />
          1.2 Usage Information:
          <br />
          When you visit our website, we may automatically collect certain
          information about your device, browsing actions, and patterns. This
          information may include your IP address, browser type, operating
          system, referring URLs, and pages viewed on our website. We use this
          information to improve our website and provide a better user
          experience.
          <br /> <br />
          Use of Information
          <br />
          2.1 Provision of Services: We use the personal information you provide
          to us to deliver our consulting services and fulfill our contractual
          obligations. This may involve contacting you, responding to your
          inquiries, and providing you with relevant information related to our
          services.
          <br />
          <br />
          2.2 Website Improvement:
          <br />
          The usage information we collect helps us understand how visitors use
          our website, identify areas for improvement, and enhance the overall
          user experience.
          <br />
          <br />
          2.3 Communication:
          <br />
          We may use your personal information to send you promotional emails,
          newsletters, and other marketing communications about our services.
          You have the right to opt-out of receiving such communications at any
          time by following the unsubscribe instructions provided in the emails
          or contacting us directly.
          <br />
          <br />
          Data Sharing and Disclosure
          <br />
          3.1 Service Providers:
          <br />
          We may share your personal information with trusted third-party
          service providers who assist us in operating our business and
          providing our services. These service providers are contractually
          obligated to use your information only for the purposes specified by
          us and in compliance with applicable privacy laws.
          <br />
          <br />
          3.2 Legal Requirements:
          <br />
          We may disclose your personal information if required to do so by law
          or if we believe in good faith that such action is necessary to comply
          with legal obligations, protect our rights or property, or investigate
          and prevent fraudulent or illegal activities.
          <br />
          <br />
          Data Security
          <br />
          We implement reasonable technical and organizational measures to
          protect your personal information from unauthorized access,
          disclosure, alteration, or destruction. However, please be aware that
          no method of transmission over the internet or electronic storage is
          completely secure. Therefore, we cannot guarantee absolute security of
          your data. Data Retention We retain personal information for as long
          as necessary to fulfill the purposes outlined in this Privacy Policy,
          unless a longer retention period is required or permitted by law. We
          will securely delete or anonymize your personal information when it is
          no longer needed.
          <br />
          <br />
          Third-Party Links
          <br />
          Our website may contain links to third-party websites that are not
          operated or controlled by Nuada. This Privacy Policy does not apply to
          such third-party websites, and we are not responsible for their
          privacy practices. We encourage you to review the privacy policies of
          those websites before providing any personal information.
          <br />
          <br />
          Children's Privacy
          <br />
          Our services and website are not directed to individuals under the age
          of 16. We do not knowingly collect or solicit personal information
          from anyone under the age of 16. If we become aware that we have
          collected personal information from an individual under the age of 16
          without parental consent, we will take steps to promptly delete the
          information.
          <br />
          <br />
          Your Rights
          <br />
          You have certain rights regarding your personal information under
          applicable data protection laws. These rights may include the right to
          access, correct, update, or delete your personal information.
        </Typography>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
export default PrivacyPolicy;
