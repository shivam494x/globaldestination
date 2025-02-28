import Crouser from "@/components/Crouser";
import PackageCardSlider from "@/components/PackageCardSlider";
import Image from "next/image";

export default function Home() {
  const imgs = [
    "/img/home/IndiaGate.webp",
    "/img/home/3.webp",
    "/img/home/kashmir.webp",
  ];

  // Dummy package data for mapping
  const DomesticPackages = [
    {
      id: 1,
      location: "Goa, India",
      days: "5 Days & 4 Nights",
      img: "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
    },
    {
      id: 2,
      location: "Jaipur, India",
      days: "3 Days & 2 Nights",
      img: "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
    },
    {
      id: 3,
      location: "Kashmir, India",
      days: "7 Days & 6 Nights",
      img: "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
    },
    {
      id: 4,
      location: "Kashmir, India",
      days: "7 Days & 6 Nights",
      img: "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
    },
    {
      id: 5,
      location: "Kashmir, India",
      days: "7 Days & 6 Nights",
      img: "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
    },
  ];
  const InternationalPackages = [
    {
      id: 1,
      location: "Goa, India",
      days: "5 Days & 4 Nights",
      img: "https://img.etimg.com/thumb/msid-31692177,width-640,resizemode-4/spending-lifestyle/how-to-plan-your-trip-to-france.jpg",
    },
    {
      id: 2,
      location: "Jaipur, India",
      days: "3 Days & 2 Nights",
      img: "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
    },
    {
      id: 3,
      location: "Kashmir, India",
      days: "7 Days & 6 Nights",
      img: "https://img.etimg.com/thumb/msid-31692177,width-640,resizemode-4/spending-lifestyle/how-to-plan-your-trip-to-france.jpg",
    },
    {
      id: 4,
      location: "Kashmir, India",
      days: "7 Days & 6 Nights",
      img: "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
    },
    {
      id: 5,
      location: "Kashmir, India",
      days: "7 Days & 6 Nights",
      img: "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
    },
  ];
  return (
    <div className="bg-black">
      {/* Hero section */}
      <section id="hero" className="h-screen relative flex items-center justify-center text-center px-4">
        <div className="absolute left-0 top-0 w-full h-full z-0 brightness-50">
          <Crouser imgs={imgs} />
        </div>
        <div className="relative w-full max-w-2xl text-white z-10">
          <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold font-karla">
            Welcome to Global Destination
          </h1>
          <div className="h-[2px] rounded-full my-4 w-1/2 bg-secondary mx-auto"></div>
          <h3 className="capitalize text-xl md:text-2xl lg:text-3xl tracking-wider">
            Explore the Amazing City
          </h3>
        </div>
      </section>

      {/* Domestic packages */}
      <section id="domestic_deals" className="container mx-auto text-white py-10 px-4">
        <div className="text-2xl md:text-3xl font-bold capitalize font-karla mb-10 text-center">
          <h3 className="w-max mx-auto">
            Our <span className="text-green-400">Domestic</span> Packages
            <div className="h-[1px] rounded-full w-3/4 mx-auto bg-green my-3"></div>
          </h3>
        </div>
        <PackageCardSlider packages={DomesticPackages} />
      </section>

      {/* International packages */}
      <section id="international_deals" className="container mx-auto text-white py-10 px-4">
        <div className="text-2xl md:text-3xl font-bold capitalize font-karla mb-10 text-center">
          <h3 className="w-max mx-auto">
            Our <span className="text-blue-400">International</span> Packages
            <div className="h-[1px] rounded-full w-3/4 mx-auto bg-blue my-3"></div>
          </h3>
        </div>
        <PackageCardSlider packages={InternationalPackages} />
      </section>

      {/* Why choose us */}
      <section id="whyUs" className="container mx-auto py-10 px-4 text-center">
        <h5 className="text-xl md:text-2xl font-bold">Why Choose Us</h5>
        <div className="flex flex-col md:flex-row items-center justify-center mt-6">
          <div className="w-full md:w-1/2 px-4">
            <p className="text-sm md:text-base leading-relaxed">
              We offer the best travel deals, experienced guides, and tailored packages to make your journey unforgettable.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
            <img src="/images/why-us.jpg" alt="Why Choose Us" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );

}
