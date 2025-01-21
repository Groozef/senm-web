"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "@/components/loading";
import Error from "@/components/Error";
import Head from "next/head";

// Dynamic imports for heavy components
const Slider = dynamic(() => import("./components/Slider/Slider"), { suspense: true });
const Services = dynamic(() => import("./components/Services"), { suspense: true });
const Portfolio = dynamic(() => import("./components/Portfolio"), { suspense: true });
const ContactForm = dynamic(() => import("./components/ContactForm"), { suspense: true });

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const isError = queryParams.get("error") === "true";

        const timer = setTimeout(() => {
            setIsLoading(false);
            setHasError(isError);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (hasError) {
        return <Error message="An error occurred when loading the page. Please try again." />;
    }

    return (
        <>
            <Head>
                <title>Transform Your Vision into Reality with SENM</title>
                <meta
                    name="description"
                    content="We provide innovative 3D design solutions for interior, exterior, and custom projects."
                />
                <meta name="keywords" content="3D design, interior design, architecture, SENM, innovative solutions" />
            </Head>

            <main className="min-h-screen flex flex-col">
                <Header />
                <Suspense fallback={<Loading />}>
                    <Slider />
                </Suspense>
                <div className="flex-grow flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-4 lg:p-8 space-y-8 flex flex-col lg:border-r">
                        <Portfolio />
                    </div>

                    <div className="w-full lg:w-1/2 p-4 lg:p-8 space-y-8 flex-col ">
                        <Suspense fallback={<Loading />}>
                            <Services />
                        </Suspense>

                        <div className="">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
