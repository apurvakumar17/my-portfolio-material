import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import BorderGlow from "../helper/BorderGlow";

function ExperienceCard(props) {
    const { experience } = props;
    return (
        <BorderGlow
            key={experience.id}
            backgroundColor="var(--md-sys-color-surface-container-highest)"
            borderRadius={16}
            className="p-5 px-10 text-[var(--md-sys-color-on-surface)] w-full"
            colors={["var(--md-sys-color-primary)", "var(--md-sys-color-secondary)", "var(--md-sys-color-tertiary)"]}
        >
            {/* Duration */}
            <div className="flex justify-center mb-3">
                <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] font-medium uppercase tracking-wide">
                    {experience.duration}
                </p>
            </div>

            {/* Icon + Title */}
            <div className="flex items-start gap-4">
                <div className="pt-1">
                    <BsPersonWorkspace
                        size={30}
                        className="text-[var(--md-sys-color-primary)]"
                    />
                </div>
                <div>
                    <p className="text-base sm:text-xl font-semibold uppercase mb-1 text-[var(--md-sys-color-on-surface)]">
                        {experience.title}
                    </p>
                    <p className="text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)]">
                        {experience.company}
                    </p>
                </div>
            </div>
        </BorderGlow>
    );
}

export default ExperienceCard;
