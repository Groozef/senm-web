import Image from "next/image";

export default function Portfolio() {
    const projects = [
        {
            title: "Modern Living Room",
            image: "/images/portfolio/living-room.jpg",
            url: "https://res.cloudinary.com/upwork-fp/image/upload/v1735998211/profile/portfolio/1739294156847960064/dypfqdwy59j6ipvak6kv.pdf",
        },
        {
            title: "Spa and Fitness Reception",
            image: "/images/portfolio/spa-rec.jpg",
            url: "https://res.cloudinary.com/upwork-fp/image/upload/v1737113977/profile/portfolio/1739294156847960064/tp5tm1ocmxcmrzahl3mv.pdf",
        },
        {
            title: "Conference Room / Workspace",
            image: "/images/portfolio/office.jpg",
            url: "https://res.cloudinary.com/upwork-fp/image/upload/v1737283009/profile/portfolio/1739294156847960064/hssbea6tsrbqyz11mvch.pdf",
        },
        {
            title: "Conference Room / Workspace",
            image: "/images/portfolio/child-room-t.jpg",
            url: "https://res.cloudinary.com/upwork-fp/image/upload/v1737207576/profile/portfolio/1739294156847960064/irizy7br1agmg3c81btg.pdf",
        },
    ];

    return (
        <section id="portfolio" className="space-y-4">
            <h2 className="text-3xl font-bold">Our Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="relative group">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={300}
                                height={200}
                                loading="lazy"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white text-center">{project.title}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
