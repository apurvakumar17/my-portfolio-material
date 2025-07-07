import React, { useState } from "react";
import axios from "axios";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function ContactForm() {
    const [error, setError] = useState({ email: false, required: false });
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    const checkRequired = () => {
        if (userInput.email && userInput.message && userInput.name) {
            setError({ ...error, required: false });
        }
    };

    const handleSendMail = async (e) => {
        e.preventDefault();
        if (!userInput.email || !userInput.message || !userInput.name) {
            setError({ ...error, required: true });
            return;
        } else if (error.email) return;

        try {
            setIsLoading(true);
            await axios.post(
                `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
                userInput
            );
            toast.success("Message sent successfully!");
            setUserInput({ name: "", email: "", message: "" });
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to send.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <p className="font-medium mb-5 text-[var(--md-sys-color-primary)] text-xl uppercase">
                Contact with me
            </p>
            <div className="max-w-3xl text-[var(--md-sys-color-on-surface)] rounded-lg border border-[var(--md-sys-color-outline)] p-3 lg:p-5">
                <p className="text-sm text-[var(--md-sys-color-on-surface-variant)]">
                    {
                        "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
                    }
                </p>
                <div className="mt-6 flex flex-col gap-4">
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base">Your Name: </label>
                        <input
                            className="bg-[var(--md-sys-color-surface-container)] w-full border rounded-md border-[var(--md-sys-color-outline-variant)] focus:border-[var(--md-sys-color-primary)] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="text"
                            maxLength="100"
                            required
                            value={userInput.name}
                            onChange={(e) =>
                                setUserInput({
                                    ...userInput,
                                    name: e.target.value,
                                })
                            }
                            onBlur={checkRequired}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base">Your Email: </label>
                        <input
                            className="bg-[var(--md-sys-color-surface-container)] w-full border rounded-md border-[var(--md-sys-color-outline-variant)] focus:border-[var(--md-sys-color-primary)] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="email"
                            maxLength="100"
                            required
                            value={userInput.email}
                            onChange={(e) =>
                                setUserInput({
                                    ...userInput,
                                    email: e.target.value,
                                })
                            }
                            onBlur={() => {
                                checkRequired();
                                setError({
                                    ...error,
                                    email: !isValidEmail(userInput.email),
                                });
                            }}
                        />
                        {error.email && (
                            <p className="text-sm text-error">
                                Please provide a valid email!
                            </p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base">Your Message: </label>
                        <textarea
                            className="bg-[var(--md-sys-color-surface-container)] w-full border rounded-md border-[var(--md-sys-color-outline-variant)] focus:border-[var(--md-sys-color-primary)] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            maxLength="500"
                            rows="4"
                            required
                            value={userInput.message}
                            onChange={(e) =>
                                setUserInput({
                                    ...userInput,
                                    message: e.target.value,
                                })
                            }
                            onBlur={checkRequired}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col items-center gap-3">
                        {error.required && (
                            <p className="text-sm text-error">
                                All fields are required!
                            </p>
                        )}
                        <button
                            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[var(--md-sys-color-primary)] to-[var(--md-sys-color-tertiary)] px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-inverse-primary transition-all duration-200 ease-out hover:text-white md:font-semibold"
                            role="button"
                            onClick={handleSendMail}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span>Sending Message...</span>
                            ) : (
                                <span className="flex items-center gap-1">
                                    Send Message <TbMailForward size={20} />
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
