import React from "react";
import FeatureAccelerate from "./FeatureAccelerate";
import FeatureBuild from "./FeatureBuild";
import FeatureLabs from "./FeatureLabs";

export default function Features() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
      className="bg-gray-900 text-white"
    >
      <FeatureAccelerate />
      <FeatureBuild />
      <FeatureLabs />
    </div>
  );
}
