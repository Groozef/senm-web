import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "SENM Design - 3D Visualization and Design",
    description:
        "We offer high-quality 3D visualizations and design services for interiors, exteriors, residential, office, and commercial spaces.",
    keywords:
        "3D design, interior design, visualization, architectural design, 3D modeling, business design, architectural visualization, 3D дизайнер интерьера, экстерьерный дизайн, визуализация интерьеров, проектирование интерьеров, архитектурное проектирование, моделирование, design d'intérieur, design extérieur, modélisation 3D, conception d'intérieur, design d'intérieur commercial, diseño de interiores, diseño exterior, visualización arquitectónica, diseño arquitectónico, progettazione 3D, modellazione architettonica, diseño de interiores comerciales, architectural visualization USA, commercial space design USA, interior design Poland, Spain, Italy, France, Germany, Czech Republic, Canada",
    openGraph: {
        title: "SENM Design - 3D Visualization and Design",
        description:
            "We offer high-quality 3D visualizations and design services for interiors, exteriors, residential, office, and commercial spaces.",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/path-to-your-image.jpg",  
                width: 1200,
                height: 630,
                alt: "3D Visualization and Design"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SENM Design - 3D Visualization and Design",
        description:
            "We offer high-quality 3D visualizations and design services for interiors, exteriors, residential, office, and commercial spaces.",
        image: "/path-to-your-image.jpg"
    },
    additionalMetaTags: [
        {
            name: "robots",
            content: "index, follow",
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* Font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.jpg" sizes="64x64" />
            </head>
            <body className="antialiased" style={{ fontFamily: "Geist, sans-serif" }}>
                {children}
            </body>
        </html>
    );
}
