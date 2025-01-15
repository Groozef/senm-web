"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Header from "./components/Header";
import Slider from "./components/Slider/Slider";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Scene from "./components/Scene";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <Slider />
            <div className="flex-grow flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-8 space-y-8">
                    {/* <Canvas>
                        <Scene />
                        <OrbitControls enableZoom={false} />
                        <Environment preset="apartment" />
                    </Canvas> */}
                </div>
                <div className="w-full md:w-1/2 p-8 space-y-8">
                    <Services />
                    <Portfolio />
                    <Testimonials />
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </main>
    );
}
