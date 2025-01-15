"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from "react-toastify"; // Импортируем ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Обязательно импортируем стили

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Сброс ошибки
        setIsLoading(true); // Включаем индикатор загрузки

        const data = { 
            name,
            email,
            message,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Message sent successfully! We'll get back to you soon.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Something went wrong.");
                toast.error(errorData.message || "Something went wrong.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            console.error("Request failed:", error);
            setError("Failed to send the message. Please try again.");
            toast.error("Failed to send the message. Please try again.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setIsLoading(false); // Отключаем индикатор загрузки
        }
    };

    return (
        <section id="contact" className="space-y-4">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                </Button>
            </form>

            {error && (
                <div className="mt-4 text-red-500">
                    <p>{error}</p>
                </div>
            )}

            {/* Добавляем ToastContainer для отображения уведомлений */}
            <ToastContainer />
        </section>
    );
}
