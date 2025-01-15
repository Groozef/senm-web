import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";

export default function Header() {
    const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="bg-background p-4 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                <div className="">
                    <img src="/images/logo.jpg" alt="SENM"  className="w-[50px]"/>
                </div>
                <nav>
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
                                <a href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")}>
                                    Testimonials
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
            </div>
        </header>
    );
}
