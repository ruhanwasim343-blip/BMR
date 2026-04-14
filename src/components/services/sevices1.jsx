import React from "react";

const services = [
  {
    icon: "/connectedcomp.svg",
    title: "AI Strategy & Governance",
    desc:
      "Develop comprehensive frameworks for responsible AI deployment, risk management, and regulatory compliance.",
  },
  {
    icon: "/connectedcomp.svg",
    title: "AI Strategy & Governance",
    desc:
      "Develop comprehensive frameworks for responsible AI deployment, risk management, and regulatory compliance.",
  },
  {
    icon: "/connectedcomp.svg",
    title: "AI Strategy & Governance",
    desc:
      "Develop comprehensive frameworks for responsible AI deployment, risk management, and regulatory compliance.",
  },
  {
    icon: "/connectedcomp.svg",
    title: "AI Strategy & Governance",
    desc:
      "Develop comprehensive frameworks for responsible AI deployment, risk management, and regulatory compliance.",
  },
  {
    icon: "/connectedcomp.svg",
    title: "AI Strategy & Governance",
    desc:
      "Develop comprehensive frameworks for responsible AI deployment, risk management, and regulatory compliance.",
  },
  {
    icon: "/connectedcomp.svg",
    title: "AI Strategy & Governance",
    desc:
      "Develop comprehensive frameworks for responsible AI deployment, risk management, and regulatory compliance.",
  },
];

export default function Services1() {
  return (
    <div className="bg-[#0F1C33]">
      <div className="max-w-7xl px-6 py-12 mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">
            Our Services
          </h1>

          <p className="text-[12px] text-[#99A1AF] mt-4">
            Comprehensive advisory services designed to guide your organization through every stage of
            <span className="block">
              responsible AI adoption, from strategic planning to measurable outcomes.
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-[#15243D] border border-white/70 rounded-xl p-5 space-y-4"
            >

              <img className="w-8 h-8" src={item.icon} alt="" />

              <h1 className="text-sm sm:text-base text-white font-semibold">
                {item.title}
              </h1>

              <p className="text-xs sm:text-sm text-[#99A1AF] leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
