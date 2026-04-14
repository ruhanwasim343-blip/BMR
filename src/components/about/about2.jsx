import React from "react";

const cards = [
  {
    icon: "/Thundereo.svg",
    title: "Accelerated Adoption",
    desc: (
      <>
        Faster AI implementation with reduced risk through proven
        <span className="block">
          methodologies and clear frameworks.
        </span>
      </>
    ),
    tag: "KEY BENEFITS",
    benefits: [
      "Reduced time to value",
      "Improved decision making",
      "Lower implementation risk",
      "Scalable AI solutions",
    ],
  },
  {
    icon: "/risingarrow.svg",
    title: "Measurable Impact",
    desc: (
      <>
        Quantify value and track ROI with systematic
        <span className="block">
          measurement and continuous optimization.
        </span>
      </>
    ),
    tag: "KEY BENEFITS",
    benefits: [
      "Clear ROI tracking",
      "ROI measurement",
      "Performance metrics",
      "Continuous improvement",
    ],
  },
  {
    icon: "/eo-sheild.svg",
    title: "Enhanced Trust",
    desc: (
      <>
        Build stakeholder confidence through transparency,
        <span className="block">
          accountability, and consistent governance.
        </span>
      </>
    ),
    tag: "KEY BENEFITS",
    benefits: [
      "Increased stakeholder confidence",
      "Transparent operations",
      "Consistent governance",
      "Strong reputation",
    ],
  },
  {
    icon: "/eo-circle-tick.svg",
    title: "Robust Compliance",
    desc: (
      <>
        Meet regulatory requirements confidently with
        <span className="block">
          comprehensive governance and risk
        </span>
        <span className="block">management.</span>
      </>
    ),
    tag: "KEY BENEFITS",
    benefits: [
      "Regulatory readiness",
      "Risk mitigation",
      "Audit preparedness",
      "Policy adherence",
    ],
  },
  {
    icon: "/eo-meter.svg",
    title: "Operational Efficiency",
    desc: (
      <>
        Streamlined processes and workflows that
        <span className="block">
          maximize productivity while maintaining quality.
        </span>
      </>
    ),
    tag: "KEY BENEFITS",
    benefits: [
      "Optimized workflows",
      "Resource efficiency",
      "Process automation",
      "Reduced overhead",
    ],
  },
  {
    icon: "/eo-jalebi.svg",
    title: "Strategic Alignment",
    desc: (
      <>
        Ensure AI initiatives align with business goals and
        <span className="block">organizational values.</span>
      </>
    ),
    tag: "KEY BENEFITS",
    benefits: [
      "Goal alignment",
      "Value-driven decisions",
      "Strategic clarity",
      "Unified direction",
    ],
  },
];

export default function About2() {
  return (
    <div className="bg-[#0F1C33]">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center sm:justify-items-stretch">

          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#15243D] border border-white/70 rounded-md p-5 w-full max-w-sm space-y-4 shadow-lg"
            >
              {/* Icon */}
              <img className="w-8 h-8" src={item.icon} alt="" />

              {/* Title */}
              <h1 className="text-lg text-white font-semibold">
                {item.title}
              </h1>

              {/* Description */}
              <p className="text-[12px] text-[#99A1AF] leading-relaxed">
                {item.desc}
              </p>

              {/* Section Title */}
              <h2 className="text-[12px] text-[#00A5A8] font-medium">
                {item.tag}
              </h2>

              {/* Benefits */}
              <div className="space-y-2">
                {item.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img
                      className="w-3 h-3"
                      src="/smallcircle-eo.svg"
                      alt=""
                    />
                    <p className="text-[12px] text-[#D1D5DC]">{b}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}