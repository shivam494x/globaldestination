import Crouser from "@/components/Crouser";
import PackageCardSlider from "@/components/PackageCardSlider";
import Divider from "@/components/UnderlineBlock";
import { ArrowUp } from "lucide-react";

const imgs = [
  "/img/home/IndiaGate.webp",
  "/img/home/3.webp",
  "/img/home/kashmir.webp",
];

const generatePackages = (imageUrl: string) => [
  { id: 1, location: "Goa, India", days: "5 Days & 4 Nights", img: imageUrl },
  {
    id: 2,
    location: "Jaipur, India",
    days: "3 Days & 2 Nights",
    img: imageUrl,
  },
  {
    id: 3,
    location: "Kashmir, India",
    days: "7 Days & 6 Nights",
    img: imageUrl,
  },
  {
    id: 4,
    location: "Kashmir, India",
    days: "7 Days & 6 Nights",
    img: imageUrl,
  },
  {
    id: 5,
    location: "Kashmir, India",
    days: "7 Days & 6 Nights",
    img: imageUrl,
  },
];

const DomesticPackages = generatePackages(
  "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg"
);
const InternationalPackages = generatePackages(
  "https://img.etimg.com/thumb/msid-31692177,width-640,resizemode-4/spending-lifestyle/how-to-plan-your-trip-to-france.jpg"
);

export default function Home() {
  return (
    <div className="bg-darkBlue">
      {/* Hero section */}
      <section className="h-screen relative flex items-center justify-center text-center px-4">
        <div className="absolute left-0 top-0 w-full h-full z-0 brightness-50">
          <Crouser imgs={imgs} />
        </div>
        <div className="relative w-full max-w-2xl text-white z-10">
          <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl font-semibold font-karla">
            Welcome to Global Destination
          </h1>
          <div className="h-[2px] rounded-full my-4 w-1/2 bg-secondary mx-auto"></div>
          <h3 className="capitalize text-xl md:text-2xl lg:text-3xl tracking-wider">
            Explore the Amazing City
          </h3>
        </div>
      </section>

      {/* Package Sections */}
      {[
        {
          id: "domestic_deals",
          title: "Domestic",
          color: "green-400",
          packages: DomesticPackages,
        },
        {
          id: "international_deals",
          title: "International",
          color: "blue",
          packages: InternationalPackages,
        },
      ].map(({ id, title, color, packages }) => (
        <section
          key={id}
          id={id}
          className="container mx-auto text-white py-10 px-4"
        >
          <div className="text-2xl md:text-3xl font-bold capitalize font-karla mb-10 text-center">
            <h3 className="w-max mx-auto">
              Our <span className={`text-${color}`}>{title}</span> Packages
              <Divider />
            </h3>
          </div>
          <PackageCardSlider packages={packages} />
        </section>
      ))}

      {/* Why choose us */}
      <section className="w-full bg-white text-darkBlue section-x section-y">
        <div className="container mx-auto px-4 md:px-8 xl:px-12">
          <h5 className="text-2xl md:text-3xl font-extrabold mb-10 w-max mx-auto md:mr-auto md:ml-0 px-3 lg:px-6">
            <span>
              Why <span className="text-blue">choose</span> Us
            </span>
          </h5>
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="md:w-1/2 md:text-left">
              <div className="shadow-md rounded-lg p-3 lg:p-6 border border-white">
                <p className="text-xs md:text-sm leading-6 tracking-wide">
                  We are excited to introduce Global Destination Management, a
                  leading name in the travel industry based in New Delhi since
                  2005. Specializing in MICE (Meetings, Incentives, Conferences,
                  and Exhibitions), leisure holidays for both groups and
                  individuals, we take pride in being members of esteemed
                  organizations such as IATA, OTAI, ADTOI, ETAA, and IAAI. Our
                  core services include organizing conferences, incentive tours,
                  hotel reservations, holiday packages, and personalized trips
                  across the globe. With a team of dedicated and experienced
                  professionals, strong industry networks, and effective
                  management and marketing strategies, Global Destination
                  Management is well-positioned to thrive in the growing travel
                  sector. We are committed to delivering unforgettable travel
                  experiences that you will cherish forever.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/img/home/whyUs.webp"
                alt="Why Choose Us"
                className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-white">
        <div className="container mx-auto section-x section-y">
          <button className="flex items-center text-lg group gap-2 w-max mx-auto px-16 py-8 border-2 border-blue text-darkBlue font-bold rounded-full transition">
            <span className="group-hover:-translate-x-3 duration-150">
              View Testimonials
            </span>
            <ArrowUp className="w-5 h-5 rotate-45 group-hover:translate-x-3 duration-150" />
          </button>
        </div>
      </section>
    </div>
  );
}
