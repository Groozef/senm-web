"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false); 

    useEffect(() => {
        setIsMounted(true);
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = () => setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const images = [
        [
            { src: "/images/slider/spa-fitness/40000.jpg", alt: "Spa and Fitness" },
            { src: "/images/slider/spa-fitness/50000.jpg", alt: "Spa and Fitness" },
            { src: "/images/slider/spa-fitness/70000.jpg", alt: "Spa and Fitness" },
        ],
        [
            { src: "/images/slider/spa-fitness/110000.jpg", alt: "Spa and Fitness" },
            { src: "/images/slider/spa-fitness/130000.jpg", alt: "Spa and Fitness" },
            { src: "/images/slider/spa-fitness/140000.jpg", alt: "Spa and Fitness" },
        ],
        [
            { src: "/images/slider/spa-fitness/160000.jpg", alt: "Spa and Fitness" },
            { src: "/images/slider/spa-fitness/170000.jpg", alt: "Spa and Fitness" },
            { src: "/images/slider/spa-fitness/180000.jpg", alt: "Spa and Fitness" },
        ],
        [
            { src: "/images/slider/apartment/1.jpg", alt: "Apartment" },
            { src: "/images/slider/apartment/9.jpg", alt: "Apartment" },
            { src: "/images/slider/apartment/12.jpg", alt: "Apartment" },
        ]
    ];

    const displayedImages = isMobile ? images.map((imageArr) => [imageArr[2]]) : images;

    if (!isMounted) {
        return null; 
    }

    return (
        <section className="py-12 mt-[10px] relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center text-white p-6 z-10">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Design your project with SENM</h1>
                    <p className="text-lg mb-4">Transform your vision into reality with our innovative solutions</p>
                    <button
                        onClick={(e) => handleScroll(e, "services")}
                        className="bg-primary text-white bg-slate-950 py-3 px-6 rounded-full text-xl flex-col items-center justify-center gap-2 hover:bg-primary-dark hover:scale-105 transition-all duration-300 ease-in-out">
                        <span>Check our Services</span>
                        <div className="flex justify-center mt-1">
                            <ArrowDown className="text-xl animate-bounce" />
                        </div>
                    </button>
                </div>
            </div>

            <div className="container min-w-full">
                <Swiper
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="relative h-[700px] min-w-full rounded-lg"
                    spaceBetween={10}
                    slidesPerView={1}
                >
                    {displayedImages.map((imagesArr, slideIndex) => (
                        <SwiperSlide key={slideIndex}>
                            <div className="flex h-full w-full items-center justify-center gap-4">
                                {imagesArr.map((image, index) => (
                                    <div key={index} className="relative w-full h-full">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            className="block w-full h-full object-cover opacity-85"
                                            fill
                                            loading="lazy"
                                            sizes="(max-width: 600px) 800px, (max-width: 1200px) 1200px, 1600px"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
