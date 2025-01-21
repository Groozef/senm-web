import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required").max(500),
    hp: z.string().optional(), 
});

const sanitizeInput = (input: string) => {
    return input
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        if (body.hp) {
            return NextResponse.json({ status: "ERROR", message: "Spam detected" }, { status: 400 });
        }

        const validatedData = ContactSchema.parse(body);
        const { name, email, message } = validatedData;

        const sanitizedName = sanitizeInput(name);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedMessage = sanitizeInput(message);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOption = {
            from: sanitizedEmail,
            to: process.env.EMAIL_USER,
            subject: "Contact form Submission",
            text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`,
        };

        await transporter.sendMail(mailOption);

        return NextResponse.json(
            {
                status: "OK",
                message: "Email sent successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error:", error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { status: "ERROR", message: error.errors.map((err) => err.message).join(", ") },
                { status: 400 }
            );
        }

        return NextResponse.json({ status: "ERROR", message: "Something went wrong" }, { status: 500 });
    }
}
