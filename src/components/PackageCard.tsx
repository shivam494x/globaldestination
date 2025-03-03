import { MapPin, Calendar, ArrowUp } from "lucide-react";

interface Package {
  img: string;
  location: string;
  days: string;
}

interface CardProps {
  pkg: Package;
  color?: "green" | "blue" | "red" | "yellow"; 
  className?: string;
}

export default function Card({
  pkg,
  color = "green",
  className = "",
}: CardProps) {
  const colorClasses: Record<string, string> = {
    green: "bg-green-500 hover:bg-green-600 text-green-400",
    blue: "bg-blue-500 hover:bg-blue-600 text-blue-400",
    red: "bg-red-500 hover:bg-red-600 text-red-400",
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-white-400",
  };
  const iconColorClasses: Record<string, string> = {
    green: "text-green-400",
    blue: "text-blue-400",
    red: "text-red-400",
    yellow: "text-yellow-400",
  };
  
  const hasWidth = /w-\d+|w-full|w-auto|w-\[.*?\]/.test(className);
  const computedClassName = hasWidth ? className : `w-[350px] ${className}`;

  return (
    <div
      className={`overflow-hidden shadow-lg mx-auto bg-gray-800 text-gray-300 rounded-xl ${computedClassName}`}
    >
      <img
        src={pkg.img}
        alt={pkg.location}
        className={`w-full object-cover rounded-t-xl ${hasWidth ? "h-40" : "h-56"}`}
      />
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-white">{pkg.location}</h3>
        <div
          className={`h-[1px] rounded-full w-full ${colorClasses[color]} my-3`}
        />

        <div className="flex items-center gap-2 text-gray-400">
          <MapPin size={16} className={iconColorClasses[color]} />
          <span>{pkg.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Calendar size={16} className={iconColorClasses[color]} />
          <span>{pkg.days}</span>
        </div>

        <button
          className={`mr-auto ${colorClasses[color]} text-white font-bold rounded-lg transition duration-300 px-4 py-2.5 flex items-center space-x-1.5 group`}
        >
          <span className="group-hover:-translate-x-2 duration-150">
            View more
          </span>
          <ArrowUp className="w-5 h-5 rotate-45 group-hover:translate-x-2 duration-150" />
        </button>
      </div>
    </div>
  );
}
