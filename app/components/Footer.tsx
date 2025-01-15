import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background p-4 flex flex-col items-center space-y-4">
            <div className="flex justify-center items-center space-x-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-6 h-6" />
                </Link>
                <Link
                    href="mailto:senmdesign@gmail.com?subject=Question about your services&body=Hello, I would like to inquire about..."
                    target="_blank"
                    rel="noopener noreferrer">
                    <Mail className="w-6 h-6" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6" />
                </Link>
            </div>
            <p>&copy; 2021 3D Design Agency. All rights reserved.</p>
        </footer>
    );
}
