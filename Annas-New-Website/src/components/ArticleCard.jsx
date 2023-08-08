import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ title, description }) {
  return (
    <Link
      to={`/resource?title=${title}`}
      className="flex w-full flex-col gap-2 py-8 text-center"
    >
      <Typography variant="h2">{title}</Typography>
      <Typography variant="small">{description.substring(0, 60)}...</Typography>
    </Link>
  );
}

export default ArticleCard;
