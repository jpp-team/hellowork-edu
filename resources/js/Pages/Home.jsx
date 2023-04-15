import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <MainLayout>
                <div className="flex flex-col">
                    <section className="container mx-auto flex flex-col justify-center items-center py-8">
                        <div className="inline-flex items-center rounded-full bg-white px-2 py-3 gap-2 w-fit">
                            <div className="w-80 text-center rounded-full bg-black text-white py-3">
                                Learn and Get Certificates
                            </div>
                            <div className="w-80 text-center">
                                Build Your Career
                            </div>
                        </div>
                    </section>
                    <section>
                        <img />
                    </section>
                </div>
            </MainLayout>
        </>
    );
};

export default Home;
