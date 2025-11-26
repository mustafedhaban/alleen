import React from "react";

import { Features } from "./Features";

function FeaturesData() {
  return (
    <div id="approach" className="min-h-screen w-full">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
            <p className="mt-2 text-lg text-gray-600">
                How we partner to deliver meaningful, measurable impact.
            </p>
        </div>
      <div className=" left-0 w-full">
        <Features
         />
      </div>
    </div>
  );
}

export { FeaturesData };
