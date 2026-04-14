import React from "react";

const frameworks = [
    {
        tag: "FOUNDATION",
        title: "Trust",
        desc:
            "Establish transparency, accountability, and ethical guardrails from the earliest implementation. Build stakeholder confidence through clear governance structures and consistent communication.",
        items: [
            "Transparency frameworks",
            "Ethical guideline development",
            "Stakeholder engagement models",
            "Trust measurement methodologies",
        ],
    },
    {
        tag: "IMPLEMENTATION",
        title: "Govern",
        desc:
            "Deploy robust governance structures, policies, and compliance measures across your organization. Ensure sustainable and responsible AI operations at scale.",
        items: [
            "Policy development and alignment",
            "Compliance frameworks",
            "Risk assessment protocols",
            "Governance committee structure",
        ],
    },
    {
        tag: "GROWTH",
        title: "Evolve",
        desc:
            "Continuously adapt and scale AI capabilities while maintaining ethical practices and human values. Foster innovation within ethical boundaries.",
        items: [
            "Continuous improvement cycles",
            "Innovation value guardrails",
            "Scaling best practices",
            "Adaptive governance models",
        ],
    },
];

export default function Framework1() {
    return (
        <div className="bg-[#15243D]">
            <div className="max-w-7xl px-6 py-12 mx-auto">

                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-3xl text-white font-bold">Our Frameworks</h1>

                    <p className="text-[12px] text-[#99A1AF] mt-4">
                        Proven methodologies and structured approaches to guide your organization's journey
                        <span className="block">
                            toward responsible AI adoption and sustainable transformation.
                        </span>
                    </p>

                    <h1 className="text-md text-white font-semibold mt-8">
                        Journey
                    </h1>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">

                    {frameworks.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#0F1C33] border border-white/70 rounded-xl p-6 space-y-4 h-full transition duration-300 hover:scale-105 hover:border-[#00A5A8]"
                        >

                            {/* Tag */}
                            <p className="text-[#00A5A8] text-[12px]">
                                {item.tag}
                            </p>

                            {/* Title + icon */}
                            <div className="flex items-center">
                                <h1 className="text-white text-lg font-semibold">
                                    {item.title}
                                </h1>

                                <img
                                    className="ml-auto w-6 h-6"
                                    src="/blackarrowgreencircle.svg"
                                    alt=""
                                />
                            </div>

                            {/* Description */}
                            <p className="text-[#99A1AF] text-xs">
                                {item.desc}
                            </p>

                            {/* List */}
                            <div className="space-y-2">
                                {item.items.map((text, i) => (
                                    <div key={i} className="flex gap-2 items-center">
                                        <img
                                            className="w-2 h-2"
                                            src="/small-green-dot.svg"
                                            alt=""
                                        />
                                        <p className="text-[#D1D5DC] text-xs">{text}</p>
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