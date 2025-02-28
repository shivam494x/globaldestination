"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

// Define TypeScript type for packages
type Package = {
  location: string;
  days: string;
  img: string;
};

type PackageCardSliderProps = {
  packages: Package[];
};

export default function PackageCardSlider({
  packages,
}: PackageCardSliderProps) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="w-full"
    >
      {packages.map((pkg, index) => (
        <SwiperSlide key={`${index}_${pkg.location}`}>
          <Card className="overflow-hidden shadow-lg w-72 mx-auto bg-gray-800 text-gray-300 rounded-xl py-0">
            <img
              src={pkg.img}
              alt={pkg.location}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <CardContent className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-white">
                {pkg.location}
              </h3>
              <div className="h-[1px] rounded-full w-full bg-green my-3"></div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>{pkg.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span>{pkg.days}</span>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg">
                View More
              </Button>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
