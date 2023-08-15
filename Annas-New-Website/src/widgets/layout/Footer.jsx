import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { HashLink } from "react-router-hash-link";

export function Footer({ title, description, socials }) {
  return (
    <footer className="relative bg-primary-blue px-4 pb-6 pt-8">
      <div className="container mx-auto">
        <div className="flex flex-col pt-6 text-center md:flex-row lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4 text-white">
              {title}
            </Typography>
            <Typography className="font-normal text-gray-100">
              {description}
              <br />
              E: help@wenuada.ie
              <br />
              T: +353 1 442 92 00
              <br />
              CRO #729199
              <br />
              ACFE #1025256
            </Typography>
            <div className="mx-auto max-w-[200px] sm:mx-0">
              <img src="/img/acfe-logo-white.jpg" alt="acfe logo" />
            </div>
            <div className="mx-auto mb-8 mt-6 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 flex w-full flex-col items-center justify-center lg:mt-0">
            <div className="rounded-2xl bg-white">
              <img src="/img/logo-big.png" alt="logo" />
            </div>
            <div className="mt-4 flex gap-8 text-sm text-white">
              <HashLink to="/privacy-policy#top">PRIVACY POLICY</HashLink>
              <HashLink to="/gdpr#top">GDPR</HashLink>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-300" />
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Nuada",
  description: "Chargeback and payment dispute management.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/profile.php?id=100064111299963",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://youtube.com/@WeNuada",
    },
    {
      color: "blue",
      name: "linkedin",
      path: "https://www.linkedin.com/company/nuada-management/",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "https://www.creative-tim.com/presentation" },
        { name: "Blog", path: "https://www.creative-tim.com/blog" },
        {
          name: "Github",
          path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        },
        {
          name: "Free Products",
          path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "MIT License",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Contribute",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Change Log",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Contact Us",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
