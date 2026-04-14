import React from "react";

const steps = [
    {
        tag: "FOUNDATION",
        title: "Trust",
        desc:
            "Establish transparency, accountability, and ethical standards for responsible AI implementation.",
    },
    {
        tag: "IMPLEMENTATION",
        title: "Govern",
        desc:
            "Deploy robust governance structures, policies, and compliance mechanisms across your organization.",
    },
    {
        tag: "GROWTH",
        title: "Evolve",
        desc:
            "Continuously adept and scale AI capabilities while maintaining responsible practices and human.",
    },
];

export default function Hero4() {
    return (
        <div className="bg-[#15243D]">
            <div className="lg:max-w-7xl px-6 py-6 mx-auto">

                {/* Heading */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl text-white">Our Frameworks</h1>

                    <p className="text-[12px] text-white/75 mt-2 mb-6">
                        Proven methodologies to guide your AI transformation journey
                    </p>

                    <h1 className="text-xl text-white">The Journey</h1>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative border border-[#F5F5F5]/80 rounded-xl p-6 text-white max-w-sm mx-auto"
                        >
                            {/* Floating Image */}
                            <img
                                src="/Arrowbutton.svg"
                                alt=""
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8"
                            />

                            {/* Content */}
                            <p className="text-[#00A5A8] text-[12px] mb-2">
                                {step.tag}
                            </p>

                            <h1 className="text-base sm:text-lg font-semibold mb-2">
                                {step.title}
                            </h1>

                            <p className="text-[10px] sm:text-xs text-white/80 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}