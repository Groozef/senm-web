"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
    return (
        <section className="py-12 mt-[10px] relative">
            {/* Блок с заголовком и подзаголовком, выравнивание по центру */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center text-white p-6 z-10">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Design your project with SENM</h1>
                    <p className="text-lg">Transform your vision into reality with our innovative solutions</p>
                </div>
            </div>

            <div className="container min-w-full">
                <Swiper
                    navigation={false}
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 4000 }}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="relative h-[700px] min-w-full rounded-lg"
                    spaceBetween={10} // Расстояние между слайдами
                    slidesPerView={1} // Один слайд на экране
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex h-full w-full items-center justify-center">
                                {/* Flexbox контейнер для 3 изображений */}
                                <div className="flex justify-between w-full h-full px-4">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            className="block h-full w-full object-cover opacity-85"
                                            layout="fill"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                    </div>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            className="block h-full w-full object-cover opacity-85"
                                            layout="fill"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                    </div>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            className="block h-full w-full object-cover opacity-85"
                                            layout="fill"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
