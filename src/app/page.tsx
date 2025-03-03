import Crouser from "@/components/Crouser";
import Card from "@/components/PackageCard";
import PackageCardSlider from "@/components/PackageCardSlider";
import Divider from "@/components/UnderlineBlock";
import { ArrowUp, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const imgs = [
  "/img/home/IndiaGate.webp",
  "/img/home/3.webp",
  "/img/home/kashmir.webp",
];
type Package = {
  id: number;
  location: string;
  days: string;
  img: string;
};
const generatePackages = (
  imageUrl: string,
  locations: { id: number; location: string; days: string }[]
) =>
  locations.map(({ id, location, days }) => ({
    id,
    location,
    days,
    img: imageUrl,
  }));

const DomesticPackages = generatePackages(
  "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
  [
    { id: 1, location: "Goa, India", days: "5 Days & 4 Nights" },
    { id: 2, location: "Jaipur, India", days: "3 Days & 2 Nights" },
    { id: 3, location: "Kashmir, India", days: "7 Days & 6 Nights" },
    { id: 4, location: "Manali, India", days: "6 Days & 5 Nights" },
    { id: 5, location: "Kerala, India", days: "5 Days & 4 Nights" },
  ]
);

const InternationalPackages = generatePackages(
  "https://img.etimg.com/thumb/msid-31692177,width-640,resizemode-4/spending-lifestyle/how-to-plan-your-trip-to-france.jpg",
  [
    { id: 1, location: "Paris, France", days: "7 Days & 6 Nights" },
    { id: 2, location: "Bali, Indonesia", days: "5 Days & 4 Nights" },
    { id: 3, location: "Dubai, UAE", days: "4 Days & 3 Nights" },
    { id: 4, location: "Maldives", days: "6 Days & 5 Nights" },
    { id: 5, location: "Switzerland", days: "8 Days & 7 Nights" },
  ]
);
const hotDeals = [
  {
    img: "https://static.vecteezy.com/system/resources/previews/012/168/187/non_2x/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG",
    location: "Maldives",
    days: "5 Days / 4 Nights",
    offer: "20% Off",
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/1c/swiss-alps.jpg?w=1400&h=1400&s=1",
    location: "Swiss Alps",
    days: "7 Days / 6 Nights",
    offer: "Limited Time Deal",
  },
  {
    img: "https://as2.ftcdn.net/jpg/01/81/07/91/1000_F_181079136_irl2A25Clc5Bi2Lwa3Q9kJvF0RlFv8tU.jpg",
    location: "New York",
    days: "4 Days / 3 Nights",
    offer: "Special Offer",
  },

  {
    img: "https://as2.ftcdn.net/jpg/01/81/07/91/1000_F_181079136_irl2A25Clc5Bi2Lwa3Q9kJvF0RlFv8tU.jpg",
    location: "New York",
    days: "4 Days / 3 Nights",
    offer: "Special Offer",
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/1c/swiss-alps.jpg?w=1400&h=1400&s=1",
    location: "Swiss Alps",
    days: "7 Days / 6 Nights",
    offer: "Limited Time Deal",
  },
];
const fixedDeparture = [
  {
    img: "https://static.vecteezy.com/system/resources/previews/012/168/187/non_2x/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG",
    location: "Maldives",
    days: "5 Days / 4 Nights",
    offer: "From 10 Feb to 20 March",
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/1c/swiss-alps.jpg?w=1400&h=1400&s=1",
    location: "Swiss Alps",
    days: "7 Days / 6 Nights",
    offer: "From 5 March to 25 April",
  },
  {
    img: "https://as2.ftcdn.net/jpg/01/81/07/91/1000_F_181079136_irl2A25Clc5Bi2Lwa3Q9kJvF0RlFv8tU.jpg",
    location: "New York",
    days: "4 Days / 3 Nights",
    offer: "From 15 Feb to 30 March",
  },
  {
    img: "https://as2.ftcdn.net/jpg/01/81/07/91/1000_F_181079136_irl2A25Clc5Bi2Lwa3Q9kJvF0RlFv8tU.jpg",
    location: "New York",
    days: "4 Days / 3 Nights",
    offer: "From 1 April to 15 May",
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/1c/swiss-alps.jpg?w=1400&h=1400&s=1",
    location: "Swiss Alps",
    days: "7 Days / 6 Nights",
    offer: "From 10 May to 30 June",
  },
];

export default function Home() {
  const packageCategories: {
    id: string;
    title: string;
    color: "green" | "blue";
    packages: Package[];
  }[] = [
    {
      id: "domestic_deals",
      title: "Domestic",
      color: "green",
      packages: DomesticPackages,
    },
    {
      id: "international_deals",
      title: "International",
      color: "blue",
      packages: InternationalPackages,
    },
  ];

  return (
    <div className="bg-darkBlue">
      {/* Hero section */}
      <section className="h-screen relative flex items-center justify-center text-center px-4">
        <div className="absolute left-0 top-0 w-full h-full z-0 brightness-50">
          <Crouser imgs={imgs} />
        </div>
        <div
          data-aos="fade-right"
          className="relative w-full max-w-2xl text-white z-10"
        >
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
      {packageCategories.map(({ id, title, color, packages }) => (
        <section
          key={id}
          id={id}
          className="container mx-auto text-white py-10 px-4"
        >
          <div className="text-2xl md:text-3xl font-bold capitalize font-karla mb-10 text-center">
            <h3 className="w-max mx-auto">
              Our <span className={`text-${color}`}>{title}</span> Packages
              <Divider color={color === "green" ? "bg-green" : "bg-blue"} />
            </h3>
          </div>
          <PackageCardSlider
            packages={packages}
            color={color}
            reverse={id === "domestic_deals"}
          />
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
            <div className="md:w-1/2 flex justify-center overflow-hidden">
              <img
                src="/img/home/whyUs.webp"
                alt="Why Choose Us"
                className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hot deals */}
      <section className="container mx-auto text-white py-10 px-4 overflow-hidden">
        <div className="text-2xl md:text-3xl font-bold capitalize font-karla mb-10 text-center">
          <h3 className="w-max mx-auto">
            <span className="text-red-500">Hot</span> deals
            <div className="h-[1px] w-16 bg-red-500 mx-auto mt-2"></div>
          </h3>
        </div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {hotDeals.map((pkg, index) => (
            <div key={index} className="relative w-max mx-auto">
              <div className="absolute z-20 -top-2 -left-4 bg-red-500 text-white text-xs px-3 py-2 rounded-sm font-semibold uppercase">
                {pkg.offer}
              </div>
              <Card pkg={pkg} color="red" />
            </div>
          ))}
        </div>
      </section>

      {/* Fixed departure */}
      <section className="container mx-auto text-white py-10 px-4 overflow-hidden">
        <div className="text-2xl md:text-3xl font-bold capitalize font-karla mb-10 text-center">
          <h3 className="w-max mx-auto">
            <span className="text-yellow-500">Fixed</span> Departure
            <div className="h-[1px] w-16 bg-yellow-500 mx-auto mt-2"></div>
          </h3>
        </div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {fixedDeparture.map((pkg, index) => (
            <div key={index} className="relative w-max mx-auto">
              <div className="absolute z-20 -top-2 -left-4 bg-yellow-500 text-white text-sm px-2 py-2 rounded-sm font-semibold uppercase">
                {pkg.offer}
              </div>
              <Card pkg={pkg} color="yellow" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-white">
        <div className="container mx-auto section-x section-y">
          <Link 
          href={'/testimonials'}
          className="flex items-center text-lg group gap-2 w-max mx-auto cursor-pointer px-16 py-8 border-2 border-blue text-darkBlue font-bold rounded-full transition">

            <span className="group-hover:-translate-x-3 duration-150">
              View Testimonials
            </span>
            <ArrowUp className="w-5 h-5 rotate-45 group-hover:translate-x-3 duration-150" />
          </Link>
        </div>
      </section>
    </div>
  );
}
