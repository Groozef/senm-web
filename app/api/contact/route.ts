import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOption = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: "Contact form Submission",
            text: `Name: ${name}\nEmai: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOption);

        return NextResponse.json(
            {
                status: "OK",
                message: "Email sent succesfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ status: "ERROR", message: "Something went wrong" }, { status: 500 });
    }
}
