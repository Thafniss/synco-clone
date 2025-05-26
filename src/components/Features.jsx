import React from "react";
import FeatureAccelerate from "./FeatureAccelerate";
import FeatureBuild from "./FeatureBuild";
import FeatureLabs from "./FeatureLabs";

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <FeatureAccelerate />
        <FeatureBuild />
        <FeatureLabs />
      </div>
    </div>
  );
}
