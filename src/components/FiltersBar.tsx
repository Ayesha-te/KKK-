import React, { useState } from "react";

// Filters bar matching the provided screenshot
// - Title + subtitle
// - Segmented control: All Properties | Residential | Commercial
// - Pills row: All Blocks | 5 MARLA | 7 MARLA | 9 MARLA
// Currently UI-only; state is kept locally for visual selection.
const FiltersBar: React.FC = () => {
  const [propertyType, setPropertyType] = useState<"all" | "residential" | "commercial">("all");
  const [size, setSize] = useState<"all" | "5" | "7" | "9">("all");

  const typeBtn = (
    key: "all" | "residential" | "commercial",
    label: string,
    isPrimary?: boolean
  ) => {
    const isActive = propertyType === key;
    // Primary style for "All Properties" when active (golden)
    const base = isPrimary
      ? isActive
        ? "bg-golden-accent text-white shadow"
        : "bg-slate-200 text-text-dark border border-gray-200 hover:bg-gray-50"
      : isActive
      ? "bg-text-dark text-white shadow"
      : "bg-slate-200 text-text-dark border border-gray-200 hover:bg-gray-50";

    return (
      <button
        key={key}
        onClick={() => setPropertyType(key)}
        className={`rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-medium transition-colors ${base}`}
      >
        {label}
      </button>
    );
  };

  const sizePill = (key: "all" | "5" | "7" | "9", label: string) => {
    const isActive = size === key;
    const base = isActive
      ? "bg-[#123B63] text-white shadow"
      : "bg-slate-200 text-text-dark border border-gray-200 hover:bg-gray-50";

    return (
      <button
        key={key}
        onClick={() => setSize(key)}
        className={`rounded-full px-6 md:px-7 py-3 text-sm md:text-base font-semibold transition-colors ${base}`}
      >
        {label}
      </button>
    );
  };

  return (
    <section className="bg-slate-200">
      <div className="container mx-auto px-4 pt-14 md:pt-20 pb-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[34px] md:text-5xl leading-tight font-extrabold text-text-dark mb-3 md:mb-4">
            Choose Your Perfect Block & Size
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive map showing available blocks. Select your preferred size
            and choose from available plots within each block.
          </p>
        </div>

        {/* Segmented property type */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          {typeBtn("all", "All Properties", true)}
          {typeBtn("residential", "Residential")}
          {typeBtn("commercial", "Commercial")}
        </div>

        {/* Size pills */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
          {sizePill("all", "All Blocks")}
          {sizePill("5", "5 MARLA")}
          {sizePill("7", "7 MARLA")}
          {sizePill("9", "9 MARLA")}
        </div>
      </div>
    </section>
  );
};

export default FiltersBar;
