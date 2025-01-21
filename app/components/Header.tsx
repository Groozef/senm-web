import { Button } from "@/components/ui/button";
import { MouseEvent, useState, useEffect, useRef } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null); 
    const buttonRef = useRef<HTMLButtonElement>(null); 

    const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleClickOutside = (e: globalThis.MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(e.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target as Node)
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="bg-background p-4 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/images/logo-web-black.png"
                        alt="SENM"
                        className="w-[110px] sm:w-[90px] md:w-[90px] lg:w-[110px]"
                    />
                </div>
                <nav className="hidden md:flex space-x-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Button variant="ghost" asChild>
                                <a href="#services" onClick={(e) => handleScroll(e, "services")}>
                                    Services
                                </a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost" asChild>
                                <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                                    Portfolio
                                </a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost" asChild>
                                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                                    Contact
                                </a>
                            </Button>
                        </li>
                    </ul>
                </nav>
                <button
                    ref={buttonRef}
                    className="md:hidden flex flex-col items-center space-y-1"
                    onClick={toggleMenu}
                    aria-label="Toggle menu">
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                </button>
            </div>

            {isMenuOpen && (
                <nav
                    ref={menuRef}
                    className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 nav-menu transition-all duration-300 ease-in-out transform ${
                        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}>
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <Button variant="ghost" asChild>
                                <a href="#services" onClick={(e) => handleScroll(e, "services")}>
                                    Services
                                </a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost" asChild>
                                <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                                    Portfolio
                                </a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost" asChild>
                                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                                    Contact
                                </a>
                            </Button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
