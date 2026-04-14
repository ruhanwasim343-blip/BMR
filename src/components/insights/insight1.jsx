import React from "react";

const insights = [
    {
        tag: "GOVERNANCE",
        title: "Building Trust in AI Systems: Framework Approach",
        desc:
            "Explore how transparent governance structures drive stakeholder confidence in AI deployments.",
        date: "2024-03-15",
        read: "5 min read",
    },
    {
        tag: "TRANSFORMATION",
        title: "The Adoption Value System: Measuring Real Impact",
        desc:
            "Learn how to identify and maximize the organizational value of AI implementations. Discover systematic approaches to tracking ROI and optimizing AI initiatives.",
        date: "2024-03-13",
        read: "7 min read",
    },
    {
        tag: "LEADERSHIP",
        title: "Executive Readiness for the AI Era",
        desc:
            "Preparing leadership teams with strategic frameworks for effective AI decision-making. Essential insights for executives navigating AI transformation.",
        date: "2024-03-01",
        read: "6 min read",
    },
    {
        tag: "GOVERNANCE",
        title: "Ethical AI: From Principles to Practice",
        desc:
            "Translating ethical principles into actionable governance policies. A practical guide to implementing responsible AI frameworks across your organization.",
        date: "2024-02-28",
        read: "8 min read",
    },
    {
        tag: "INNOVATION",
        title:
            "Human-AI Collaboration: Designing Better Processes",
        desc:
            "Best practices for creating AI systems that enhance rather than replace human capabilities. Explore the HAI framework in action.",
        date: "2024-02-20",
        read: "6 min read",
    },
    {
        tag: "STRATEGY",
        title: "Risk Management in AI Implementation",
        desc:
            "Identifying and mitigating risks across technical, ethical, and operational dimensions. A comprehensive approach to AI risk management.",
        date: "2024-02-15",
        read: "9 min read",
    },
];

export default function Insight1() {
    return (
        <div className="bg-[#15243D]">
            <div className="max-w-7xl px-6 mx-auto py-12">

                {/* Heading */}
                <div className="text-center space-y-3">
                    <h1 className="text-3xl text-white font-bold">
                        Insights
                    </h1>

                    <p className="text-[12px] text-[#99A1AF]">
                        Expert perspectives on responsible AI, governance frameworks,
                        <span className="block">
                            transformation strategies, and leadership in the age of artificial intelligence.
                        </span>
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-7">

                    {insights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#0F1C33] border border-white/10 rounded-xl p-5 space-y-4 shadow-lg w-full max-w-sm hover:scale-[1.03] transition"
                        >

                            {/* Tag */}
                            <p className="text-md text-[#00A5A8]">
                                {item.tag}
                            </p>

                            {/* Title */}
                            <h1 className="text-sm text-white font-semibold leading-snug">
                                {item.title}
                            </h1>

                            {/* Description */}
                            <p className="text-[12px] text-[#99A1AF] leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Meta */}
                            <div className="flex items-center gap-4 text-[#6A7282] text-[10px]">

                                <div className="flex items-center gap-1">
                                    <img
                                        className="w-3 h-3"
                                        src="/silver-calender.svg"
                                        alt=""
                                    />
                                    <p>{item.date}</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <img
                                        className="w-3 h-3"
                                        src="/silver-clock.svg"
                                        alt=""
                                    />
                                    <p>{item.read}</p>
                                </div>

                            </div>

                            {/* Read More */}
                            <div className="flex items-center gap-2 cursor-pointer group">
                                <p className="text-[12px] text-[#00A5A8] group-hover:underline">
                                    Read More
                                </p>

                                <img
                                    className="w-3 h-3 group-hover:translate-x-1 transition"
                                    src="/green-right-arrow.svg"
                                    alt=""
                                />
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}