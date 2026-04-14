import React from "react";

const features = [
    {
        name: "HAI",
        title: "Human-AI Interaction",
        description:
            "A comprehensive framework for designing collaborative systems that enhance human decision-making while maintaining ethical boundaries and human agency.",
        items: [
            "Human-centered design",
            "Augmentation over replacement",
            "Transparent decision pathways",
            "Ethical interaction patterns",
        ],
    },
    {
        name: "AVS",
        title: "Adoption Value System",
        description:
            "A structured methodology for measuring and maximizing the organizational value of AI implementations through systematic assessment and optimization.",
        items: [
            "Value identification",
            "Impact measurement",
            "ROI tracking",
            "Continuous optimization",
        ],
    },
];

export default function Framework2() {
    return (
        <div className="bg-[#0F1C33]">
            <div className="max-w-7xl mx-auto px-6 py-6">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center text-white">
                    Core Methodologies
                </h1>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-[#15243D] rounded-xl p-6 space-y-4 
              shadow-[ -8px_0_20px_rgba(255,255,255,0.15),_0_8px_20px_rgba(255,255,255,0.15) ]"
                        >

                            {/* Tag */}
                            <h1 className="text-[#00A5A8] text-md">{item.name}</h1>

                            {/* Title */}
                            <h1 className="text-white text-md font-bold">
                                {item.title}
                            </h1>

                            {/* Description */}
                            <p className="text-[#99A1AF] text-[12px]">
                                {item.description}
                            </p>

                            {/* Section title */}
                            <h1 className="text-[#00A5A8] text-[12px]">
                                KEY PRINCIPLES
                            </h1>

                            {/* List */}
                            <div className="space-y-2">
                                {item.items.map((text, i) => (
                                    <div key={i} className="flex gap-2 items-center">
                                        <img
                                            className="w-2 h-2"
                                            src="/small-green-dot.svg"
                                            alt=""
                                        />
                                        <p className="text-[#D1D5DC] text-[12px]">
                                            {text}
                                        </p>
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