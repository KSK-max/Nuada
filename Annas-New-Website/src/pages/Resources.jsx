import { Footer } from "@/widgets/layout";
import React from "react";
import resources from "@/data/resources";
import ArticleCard from "@/components/ArticleCard";

function Resources() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-4 py-16">
        {resources.map((resource) => (
          <div className="w-[90vw] rounded-lg border-[1px] border-primary-dark transition-colors hover:bg-primary-turquoise hover:text-white">
            <ArticleCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Resources;
