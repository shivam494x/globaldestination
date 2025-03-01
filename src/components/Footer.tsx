import Image from "next/image";
import Link from "next/link";
import Divider from "./UnderlineBlock";

export const Footer = () => {
  const footerLinks = [
    { title: "About us", links: ["About us", "Blogs"] },
    {
      title: "Packages",
      links: ["International packages", "Domestic packages", "Fixed Departure"],
    },
    {
      title: "Legal",
      links: ["Privacy & policy", "Terms & conditions", "Cancellation policy"],
    },
    { title: "Social", links: ["Twitter", "Instagram"] },
  ];

  return (
    <div className="relative mt-16 bg-darkBlue">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-bg-darkBlue"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#09122c"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H0V22Z"
        />
      </svg>

      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          {/* Company Info */}
          <div className="md:max-w-md lg:col-span-2">
            <a href="/" className="inline-flex items-center">
              <Image src={"/img/logo.webp"} alt="logo" height={20} width={80} />
              <span className="ml-2 text-lg font-medium tracking-wide text-green uppercase">
                Global Destination
              </span>
            </a>
            <p className="mt-4 text-xs lg:text-sm text-gray-400">
              We are excited to introduce Global Destination Management, a
              leading name in the travel industry based in New Delhi since 2005.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 my-auto">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h6 className="font-medium tracking-wide text-sm lg:text-base">
                  {section.title}
                </h6>
                <div className="h-[1px] rounded-full w-4/5 bg-blue my-3"></div>
                <ul className="mt-2 space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="/"
                        className="transition-all capitalize duration-300 text-gray-400 text-xs lg:text-sm hover:text-green-300 hover:translate-x-0.5 inline-block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-700 sm:flex-row">
          <p className="text-xs text-gray-400">
            © Copyright 2025{" "}
            <span className="text-green">Global Destination</span>. All rights
            reserved.
          </p>
          <div className="text-xs text-gray-400">
            Designed & Developed by{" "}
            <Link
              href={"https://kanakdrishtiinfotech.in/"}
              target="_blank"
              className="text-green underline underline-offset-4"
            >
              Kanak Drishti Infotech
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
