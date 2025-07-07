import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm2() {
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    const BOT_TOKEN = "7449718105:AAGpBToWqXvMtfBLvWMHaiXAuxQJ_GPbsZA"; // Replace with your actual token
    const CHAT_ID = "1531543926";     // Replace with your chat ID

    const handleSendToTelegram = async (e) => {
        e.preventDefault();

        const { name, email, message } = userInput;

        if (!name || !email || !message) {
            toast.error("All fields are required!");
            return;
        }

        const text = `📩 New Message:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message:\n${message}\n\nvia Portfolio Website`;

        try {
            setIsLoading(true);
            const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text }),
            });

            const data = await res.json();
            if (data.ok) {
                toast.success("Message Sent!");
                setUserInput({ name: "", email: "", message: "" });
            } else {
                toast.error("Failed to send message.");
            }
        } catch (err) {
            toast.error("Error: " + err.message);
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
                    {"If you have any questions or work opportunities, feel free to reach out!"}
                </p>

                <div className="mt-6 flex flex-col gap-4">
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base">Your Name:</label>
                        <input
                            className="bg-[var(--md-sys-color-surface-container)] w-full border rounded-md border-[var(--md-sys-color-outline-variant)] focus:border-[var(--md-sys-color-primary)] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="text"
                            maxLength="100"
                            required
                            value={userInput.name}
                            onChange={(e) =>
                                setUserInput({ ...userInput, name: e.target.value })
                            }
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base">Your Email:</label>
                        <input
                            className="bg-[var(--md-sys-color-surface-container)] w-full border rounded-md border-[var(--md-sys-color-outline-variant)] focus:border-[var(--md-sys-color-primary)] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="email"
                            maxLength="100"
                            required
                            value={userInput.email}
                            onChange={(e) =>
                                setUserInput({ ...userInput, email: e.target.value })
                            }
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base">Your Message:</label>
                        <textarea
                            className="bg-[var(--md-sys-color-surface-container)] w-full border rounded-md border-[var(--md-sys-color-outline-variant)] focus:border-[var(--md-sys-color-primary)] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            maxLength="500"
                            rows="4"
                            required
                            value={userInput.message}
                            onChange={(e) =>
                                setUserInput({ ...userInput, message: e.target.value })
                            }
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col items-center gap-3">
                        <button
                            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[var(--md-sys-color-primary)] to-[var(--md-sys-color-tertiary)] px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-inverse-primary transition-all duration-200 ease-out hover:text-white md:font-semibold"
                            role="button"
                            onClick={handleSendToTelegram}
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

export default ContactForm2;
