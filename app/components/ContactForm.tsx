"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", hp: "" }); 
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Hiden input for check bot
        if (formData.hp) {
            toast.error("Spam detected!");
            return;
        }

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            toast.error("All fields are required.");
            return;
        }

        const sanitizedData = {
            name: sanitizeInput(formData.name),
            email: formData.email, 
            message: sanitizeInput(formData.message),
        };

        setIsLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(sanitizedData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to send message.");
            }

            toast.success("Message sent successfully! We'll get back to you soon.");
            setFormData({ name: "", email: "", message: "", hp: "" }); 
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error(error.message || "Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const sanitizeInput = (input: string) => {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    };

    return (
        <section id="contact" className="space-y-4">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden field for protection from bots */}
                <input type="text" name="hp" style={{ display: 'none' }} /> 

                <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Your Name"
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Your Email"
                />
                <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    aria-label="Your Message"
                />
                <Button type="submit" disabled={isLoading} aria-busy={isLoading} aria-live="polite">
                    {isLoading ? "Sending..." : "Send Message"}
                </Button>
            </form>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
        </section>
    );
}
