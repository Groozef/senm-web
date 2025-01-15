import Image from "next/image";

export default function Portfolio() {
    const projects = [
        { title: "Modern Living Room", image: "/images/first.jpg" },
        { title: "Sleek Kitchen Design", image: "/images/second.jpg" },
        { title: "Luxurious Bathroom", image: "/images/third.jpg" },
        { title: "Cozy Bedroom Setup", image: "/images/fourth.jpg" },
    ];

    return (
        <section id="portfolio" className="space-y-4">
            <h2 className="text-3xl font-bold">Our Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="relative group">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={200}
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-center">{project.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
