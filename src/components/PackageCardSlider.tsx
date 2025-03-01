"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MapPin, Calendar, ArrowUp } from "lucide-react";

// Define TypeScript type for packages
type Package = {
  location: string;
  days: string;
  img: string;
};

type PackageCardSliderProps = {
  packages: Package[];
  reverse: boolean;
};

export default function PackageCardSlider({
  packages,
  reverse,
}: PackageCardSliderProps) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 4000, // Set delay to 1 second (1000ms)
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      loop={true}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="w-full"
    >
      {packages.map((pkg, index) => (
        <SwiperSlide key={`${index}_${pkg.location}`}>
          <div className="overflow-hidden shadow-lg w-72 mx-auto bg-gray-800 text-gray-300 rounded-xl">
            <img
              src={pkg.img}
              alt={pkg.location}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-white">
                {pkg.location}
              </h3>
              <div className="h-[1px] rounded-full w-full bg-green-500 my-3"></div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-green-400" />
                <span>{pkg.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} className="text-green-400" />
                <span>{pkg.days}</span>
              </div>
              <button className="mr-auto bg-green-500 hover:bg-green-600 text-white font-bold  rounded-lg transition duration-300">
                <div className="h-full group flex mx-auto w-full items-center space-x-1.5 px-4 py-2.5">
                  <span className="group-hover:-translate-x-2 duration-150">
                    View more
                  </span>
                  <ArrowUp className="w-5 h-5 rotate-45 group-hover:translate-x-2 duration-150" />
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
