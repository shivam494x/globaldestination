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
    <>
      {/* Heor section */}
      <section id="hero" className="h-full relative">
        <div className="absolute left-0 top-0 w-full h-full -z-10 brightness-50">
          <Crouser imgs={imgs} />
        </div>
        <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 relative w-max text-white">
          <h1 className="text-center uppercase text-4xl tracking-tighter font-semibold font-karla">
            Welcome to Global Destination
          </h1>
          <div className="h-[2px] rounded-full my-4 w-1/2 bg-secondary m-auto"></div>
          <h3 className="text-center capitalize text-3xl tracking-wider">
            Explore the Amazing City
          </h3>
        </div>
      </section>
      {/* Domestic packages */}
      <section
        id="domestic_deals"
        className="section-y section-x container mx-auto bg-black text-white py-10"
      >
        <div className="text-3xl font-bold capitalize font-karla mb-16 text-center">
          <h3 className="w-max mx-auto">
            Our <span className="text-green-400">Domestic</span> Packages
            <div className="h-[1px] rounded-full w-3/4 mx-auto bg-green my-3"></div>
          </h3>
        </div>

        <PackageCardSlider packages={DomesticPackages} />
      </section>

      {/* International packages */}
      <section
        id="international_deals"
        className="section-y section-x container mx-auto bg-black text-white py-10"
      >
        <div className="text-3xl font-bold capitalize font-karla mb-16 text-center">
          <h3 className="w-max mx-auto">
            Our <span className="text-blue-400">International</span> Packages
            <div className="h-[1px] rounded-full w-3/4 mx-auto bg-blue my-3"></div>
          </h3>
        </div>

        <PackageCardSlider packages={InternationalPackages} />
      </section>

      {/* why chose us */}
      <section id="whyUs" className="section-x section-y container mx-auto">
        <div>
          <h5>
            Why choose us
          </h5>
        </div>
        <div className="img">
          {/* <Image
            src={"https://globaldestination.in/assets/images/Switzerland.png"}
            alt="us"
            width={200}
            height={100}
          /> */}
        </div>
      </section>
    </>
  );
}
