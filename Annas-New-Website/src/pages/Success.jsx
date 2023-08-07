import { Footer } from "@/widgets/layout";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";

function Success() {
  return (
    <>
      <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-8">
        <Typography variant="h1">Payment successful!</Typography>
        <Link to="/home">
          <Button color="blue" className="bg-primary-blue text-2xl">
            Home
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Success;
