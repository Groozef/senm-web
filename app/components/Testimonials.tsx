import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            company: "Modern Homes Inc.",
            text: "The 3D designs provided by this agency transformed our project. Highly recommended!",
        },
        {
            name: "Jane Smith",
            company: "Luxury Interiors",
            text: "Their attention to detail and creativity in 3D modeling is unparalleled. A joy to work with!",
        },
    ];

    return (
        <section id="testimonials" className="space-y-4">
            <h2 className="text-3xl font-bold">Testimonials</h2>
            <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{testimonial.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="italic">{testimonial.text}</p>
                            <p className="mt-2 text-sm text-muted-foreground">{testimonial.company}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
