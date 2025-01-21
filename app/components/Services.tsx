import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, PenTool, Brush, CameraIcon } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Interior Design",
            description: "Transform your indoor spaces with our expert 3D interior design services. We enhance existing models and improve designs upon request, creating realistic, personalized textures tailored to your needs.",
            icon: Home,
        },
        {
            title: "Exterior Design",
            description: "Create stunning outdoor environments with our 3D exterior design expertise. We can refine your current models, adding custom textures and improving details based on your vision.",
            icon: Building,
        },
        {
            title: "360 Renderings",
            description: "We provide immersive 360-degree renderings, allowing clients to explore spaces virtually. Perfect for real estate, interior design, and architectural presentations.",
            icon: CameraIcon,
        },
        {
            title: "3D Modeling for Commercial Spaces",
            description: "Specializing in interior and exterior design for commercial spaces, we help businesses create functional and aesthetically pleasing environments that align with their brand and needs.",
            icon: PenTool,
        },
        {
            title: "Design for Developers",
            description: "We offer design services tailored to real estate developers, creating high-quality 3D visualizations and plans for large-scale residential or commercial projects.",
            icon: Brush,
        },
        {
            title: "Interior and Exterior Design for Apartments/Houses",
            description: "Whether for apartments, private houses, or entire residential complexes, we provide complete interior and exterior design services to bring your dream home to life.",
            icon: Home,
        },
        {
            title: "Types of Interior Design",
            description: "We specialize in various types of interior design, including modern, minimalist, industrial, classic, and more, tailored to your personal style and preferences.",
            icon: Home,
        }
        

    ];

    return (
        <section id="services" className="space-y-4">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                {<service.icon className="mr-2" />}
                                {service.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{service.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
