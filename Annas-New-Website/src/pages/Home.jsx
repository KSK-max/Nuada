import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  const form = useRef();
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      fraudType,
      transferAmount,
      transferDate,
      companyName,
      suspectReason,
      evidence,
    } = e.target;

    const formData = new FormData();
    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);
    formData.append("email", email.value);
    formData.append("phoneNumber", phoneNumber.value);
    formData.append("fraudType", fraudType.value);
    formData.append("transferAmount", transferAmount.value);
    formData.append("transferDate", transferDate.value);
    formData.append("companyName", companyName.value);
    formData.append("suspectReason", suspectReason.value);
    formData.append("evidence", evidence.files[0]);

    try {
      const response = await fetch(`https://nuada.vercel.app/contact`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setStatus("Submit");
      alert(result.status);
    } catch (error) {
      setStatus("Submit");
      alert("Error Sending Message");
    }
  };

  return (
    <>
      <div className="flex w-full items-center justify-center gap-2 bg-primary-blue px-2 py-4 text-white sm:gap-3 md:gap-4">
        <Typography
          variant="paragraph"
          className="!whitespace-nowrap !text-sm sm:text-base"
        >
          Want to report a fraud or contact Nuada?{" "}
          <span className="hidden md:inline-block">We can help.</span>
        </Typography>
        <HashLink
          to="/#fraudSection"
          className="rounded-md bg-secondary-magenta px-2 py-1 text-sm transition-colors hover:bg-primary-turquoise sm:px-4"
        >
          Report a fraud
        </HashLink>
      </div>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 
                font-black"
              >
                Chargeback and payment dispute management.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                At Nuada, we value personal connections over workload.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section
        className="-mt-32 bg-gray-50 px-4 pb-20 pt-4"
        id="solutionSection"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description, route }) => (
              <Link to={route} key={title}>
                <FeatureCard
                  key={title}
                  color={color}
                  title={title}
                  icon={React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                  description={description}
                />
              </Link>
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold text-primary-blue"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Nuada is a payment dispute management company based in Ireland.
                Core Nuada values are impartiality and objectivity, which draws
                back emotions from facts and result in liability for the parties
                involved. Nuada unpuzzles and leads cases for victims of fraud
                or chargeback appliers.
                <br />
                <br />
                For businesses - Nuada provides effective chargeback management
                in compliance with card brand rules. Nuada solves complex cases
                and gives a peace of mind. Nuada's clients are companies that
                receive payments online, and consumers who want to dispute a
                payment made online. Results delivered are sales retention for
                businesses and rightful results for consumers payment disputes.
                Nuada works on flexible payment terms. Our clients can choose to
                lead the case following Nuada's guidelines themselves. Delegate
                or outsource are options available for individuals or
                businesses.
              </Typography>
              <Button
                variant="filled"
                className="border-primary-blue bg-primary-blue"
              >
                read more
              </Button>
            </div>
            {/* <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    className="mb-3 font-bold text-primary-blue"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Nuada has a top-notch approach to each case. Having a unique
                    experience from the bottom to the top, Nuada knows exactly
                    what's happening in each particular case, avoiding
                    robotization, and lighting a torch to straighten the
                    processes and make things work resolving the case, and
                    bringing it to its logical conclusion. Saving revenue for
                    companies or standing with consumers in the bureaucracy
                    field, Nuada is a reliable partner you can trust. Talk to us
                    by scheduling a call. "Talk to us can be a link leading to
                    "Contact us" form
                  </Typography>
                </CardBody>
              </Card>
            </div> */}
          </div>
        </div>
      </section>
      <section className="relative bg-primary-blue px-4 py-8" id="aboutSection">
        <div className="container mx-auto">
          <PageTitle
            heading="How can Nuada help?"
            headingClassName={"text-white"}
          >
            <span className="text-gray-200">
              Nuada offers a full suite of services to help maximize your
              chances of recovery:
            </span>
          </PageTitle>
          <div className="mx-auto my-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-white"
                >
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="fraudSection" className="mt-8 bg-gray-50 px-4 pb-20 pt-4">
        <PageTitle heading="Report a Fraud">
          If you've been hit by fraud and need to speak to someone urgently,{" "}
          <span className="text-secondary-magenta">call +353 1 442 92 00.</span>
        </PageTitle>
        <div className="mx-auto max-w-6xl p-6">
          <form
            ref={form}
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 2xl:gap-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Cell Phone Number*
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="e.g. 555-555-5555"
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="fraudType"
                className="block text-sm font-medium text-gray-700"
              >
                What best describes you?*
              </label>
              <select
                id="fraudType"
                name="fraudType"
                className="mt-1 w-full rounded-md border p-2"
                required
              >
                <option value="">Please Select</option>
                <option value="lottery scams">Lottery Scams</option>
                <option value="phishing scams">Phishing Scams</option>
                <option value="investment scams">Investment Scams</option>
                <option value="romance scams">Romance Scams</option>
                <option value="tech support scams">Tech Support Scams</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="transferAmount"
                className="block text-sm font-medium text-gray-700"
              >
                How much money did you transfer?*
              </label>
              <input
                type="number"
                id="transferAmount"
                name="transferAmount"
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="transferDate"
                className="block text-sm font-medium text-gray-700"
              >
                When did you do the transfer?*
              </label>
              <input
                type="date"
                id="transferDate"
                name="transferDate"
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                What is the name of the Company you did a transfer to?*
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="suspectReason"
                className="block text-sm font-medium text-gray-700"
              >
                Why do you suspect your funds were sent to a fraudster?*
              </label>
              <textarea
                id="suspectReason"
                name="suspectReason"
                rows="4"
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="evidence"
                className="block text-sm font-medium text-gray-700"
              >
                Fraud Recovery Evidence Upload e.g. bank statements past date,
                fraudulent instructions, copies of email communications with
                fraudster. This will help expedite recovery efforts.
              </label>
              <input
                type="file"
                id="evidence"
                name="evidence"
                className="mt-1 w-full rounded-md border p-2"
              />
            </div>

            <div className="place-self-end lg:col-span-2">
              <button
                type="submit"
                className="rounded-md  bg-primary-blue/90 px-8 py-2 text-xl font-semibold text-white hover:bg-primary-blue"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
