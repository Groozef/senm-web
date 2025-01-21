import { Instagram, Linkedin, Mail, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();  

    return (
        <footer className="bg-background p-4 flex flex-col items-center space-y-4">
            <div className="flex justify-center items-center space-x-4">
                {/* Facebook */}
                <Link href="https://www.facebook.com/share/15a7cCN4cr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="w-6 h-6" />
                </Link>
                {/* Mail */}
                <Link
                    href="mailto:senmdesign@gmail.com?subject=Question about your services&body=Hello, I would like to inquire about..."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email">
                    <Mail className="w-6 h-6" />
                </Link>
                {/* Instagram */}
                <Link href="https://www.instagram.com/senmdesign/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                </Link>
                {/* Linkedin */}
                <Link href="https://www.linkedin.com/in/temirlan-maratov-04b076347/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6" />
                </Link>
                {/* Upwork */}
                <Link href="https://www.upwork.com/agencies/1876631657939633465/" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                    <img src="/icons/upwork.svg" alt="Upwork" className="w-6 h-6" />
                </Link>
                {/* Behance */}
                <Link href="https://www.behance.net/temirlanmaratov" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                    <img src="/icons/behance.svg" alt="Behance" className="w-6 h-6" />
                </Link>
                {/* Telegram */}
                <Link href="https://t.me/senmdesign" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <img src="/icons/telegram.svg" alt="Telegram" className="w-6 h-6" />
                </Link>
            </div>
            <p>&copy; {currentYear} 3D Design Agency. All rights reserved.</p>
        </footer>
    );
}
