import { Footer } from "@/widgets/layout";
import React from "react";
import resources from "@/data/resources";
import { useSearchParams } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Resource() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(
    resources.find(
      (resource) => resource.title === searchParams.get("title")
    ) != null
  );
  if (
    !searchParams.get("title") ||
    resources.find(
      (resource) => resource.title === searchParams.get("title")
    ) == null
  ) {
    return (
      <>
        <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-8">
          <Typography variant="h2">That resource does not exist.</Typography>
          <Link to="/">
            <Button className="bg-primary-blue text-xl">Home</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const { title, description } = resources.find(
    (resource) => resource.title === searchParams.get("title")
  );
  return (
    <>
      <div className="flex min-h-[60vh] flex-col gap-8 px-8 py-20">
        <Typography variant="h2">{title}</Typography>
        <div className="h-[2px] w-full bg-primary-blue"></div>
        <Typography variant="paragraph">{description}</Typography>
      </div>
      <Footer />
    </>
  );
}

export default Resource;
