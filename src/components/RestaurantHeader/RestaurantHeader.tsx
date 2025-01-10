import React from "react";
import { Button } from "../ui/Button";
import { Info, Star } from "lucide-react";

export function RestaurantHeader() {
  return (
    <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
      <img
        src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg"
        alt="KFC Restaurant Banner"
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20">
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold mb-4">KFC Essentay Mall</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 hover:bg-white/20 bg-white/30 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
              <span className="font-semibold">3.7</span>
              <span className="text-sm text-gray-200">(200+)</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 bg-white/30"
            >
              <Info className="h-4 w-4 mr-2" />
              Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
