import { useState } from "react";

export default function Laptop({ name, link, description, image, specs, pros, cons }) {
    const [activeView, setActiveView] = useState(null); // Tracks the active view: 'specs', 'prosCons', or null.

    return (
        <div className="flex flex-col lg:flex-row justify-between items-start p-2 lg:p-4 bg-dark shadow-[0_0_2px] shadow-light gap-1 lg:gap-4 cursor-default">
            {/* Image Section */}
            <div className="basis-1/6 flex-shrink-0 ">
            <img
                src={image}
                alt={`${name} laptop image`}
                className="w-full rounded-lg object-scale-down filter brightness-70"
                style={{ backgroundColor: "#ffffff" }}
            />

            </div>

            {/* Details Section */}
            <div className="flex flex-col flex-grow gap-4">
                {/* Header */}
                <div className="h-1/5 flex flex-row justify-between items-center lg:items-center mt-2">
                    <h5 className="text-base lg:text-2xl font-bold text-light">{name}</h5>
                    <button
                        className="bg-light text-dark hover:bg-white px-3 py-1 lg:mt-0 text-sm font-semibold rounded-lg shadow-sm transition-transform transform hover:scale-105"
                        onClick={() => window.open(link, "_blank")}
                    >
                        Visit Website
                    </button>
                </div>

                {/* Description */}
                <p className="h-3/5 text-light text-xs lg:text-sm leading-relaxed">{description}</p>

                {/* Toggle Buttons */}
                <div className="h-1/5 flex gap-4">
                    <button
                        className={`text-white px-3 py-1 rounded-lg text-xs font-medium shadow-[0_0_2px] shadow-light transition-transform transform hover:scale-105 ${
                            activeView === "specs" ? "bg-gray-700" : ""
                        }`}
                        onClick={() => setActiveView(activeView === "specs" ? null : "specs")}
                    >
                        {activeView === "specs" ? "Hide Specs" : "Show Specs"}
                    </button>
                    <button
                        className={`text-white px-3 py-1 rounded-lg text-xs font-medium shadow-[0_0_2px] shadow-light transition-transform transform hover:scale-105 ${
                            activeView === "prosCons" ? "bg-gray-700" : ""
                        }`}
                        onClick={() => setActiveView(activeView === "prosCons" ? null : "prosCons")}
                    >
                        {activeView === "prosCons" ? "Hide Pros & Cons" : "Show Pros & Cons"}
                    </button>
                </div>

                {/* Specifications */}
                {activeView === "specs" && (
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h6 className="text-light font-semibold text-lg mb-2">Recommended Configuration</h6>
                        <ul className="text-gray-300 text-sm space-y-1">
                            {Object.entries(specs).map(([key, value]) => (
                                <li key={key}>
                                    <span className="font-semibold capitalize">{key}:</span> {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Pros & Cons */}
                {activeView === "prosCons" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="bg-green-600 p-4 rounded-lg bg-opacity-20 text-white backdrop-blur-md backdrop-saturate-150">
                            <h6 className="text-light font-semibold text-lg mb-2">Pros</h6>
                            <p className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                {pros.map((pro, index) => (
                                    <p key={index}>{pro}</p>
                                ))}
                            </p>
                        </div>
                        <div className="bg-red-600 p-4 rounded-lg bg-opacity-20 text-white backdrop-blur-md backdrop-saturate-150">
                            <h6 className="text-light font-semibold text-lg mb-2">Cons</h6>
                            <p className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                {cons.map((con, index) => (
                                    <p key={index}>{con}</p>
                                ))}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
