import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, PenTool, Palette } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Interior Design",
            description: "Transform your indoor spaces with our expert 3D interior design services.",
            icon: Home,
        },
        {
            title: "Exterior Design",
            description: "Create stunning outdoor environments with our 3D exterior design expertise.",
            icon: Building,
        },
        {
            title: "3D Modeling",
            description: "Bring your ideas to life with our professional 3D modeling services.",
            icon: PenTool,
        },
        {
            title: "Color Consultation",
            description: "Get expert advice on color schemes that will make your space pop.",
            icon: Palette,
        },
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
