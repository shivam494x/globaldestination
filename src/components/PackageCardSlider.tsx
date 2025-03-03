"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MapPin, Calendar, ArrowUp } from "lucide-react";
import Card from "./PackageCard";

// Define TypeScript type for packages
type Package = {
  location: string;
  days: string;
  img: string;
};

type PackageCardSliderProps = {
  packages: Package[];
  reverse: boolean;
  color?: "green" | "blue" | "red" | "yellow";
};

export default function PackageCardSlider({
  packages,
  reverse,
  color = "blue",
}: PackageCardSliderProps) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 4000,
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
          <Card pkg={pkg} color={color} className="w-72" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
