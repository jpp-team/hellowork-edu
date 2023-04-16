import assets from "@/Data/assets";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

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
                            <div className="w-[360px] text-center rounded-full bg-black text-white py-3">
                                Learn and Get Certificates
                            </div>
                            <div className="w-[360px] text-center">
                                Build Your Career
                            </div>
                        </div>
                    </section>
                    <section className="flex justify-center">
                        <img src={assets.imgHero} className="w-11/12" />
                    </section>
                    <section className="container mx-auto flex flex-col justify-center items-center py-8">
                        <div className="flex min-w-full">
                            <button>iyhh</button>
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: true,
                                }}
                                loop={true}
                                direction="horizontal"
                                spaceBetween={60}
                                slidesPerView={2}
                                width={360}
                            >
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-2 w-min">
                                        <div className="bg-white rounded-full w-32 h-32 flex justify-center items-center">
                                            <img
                                                src={assets.dibimbing}
                                                className="object-center w-24 h-auto"
                                            />
                                        </div>
                                        <p className="text-center">
                                            Japanese Language
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-2 w-min">
                                        <div className="bg-white rounded-full w-32 h-32 flex justify-center items-center">
                                            <img
                                                src={assets.arkalearn}
                                                className="object-center w-24 h-auto"
                                            />
                                        </div>
                                        <p className="text-center">IT Skills</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-2 w-min">
                                        <div className="bg-white rounded-full w-32 h-32 flex justify-center items-center">
                                            <img
                                                src={assets.comingSoon}
                                                className="object-center w-24 h-auto"
                                            />
                                        </div>
                                        <p className="text-center">
                                            Coming Soon
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-2 w-min">
                                        <div className="bg-white rounded-full w-32 h-32 flex justify-center items-center">
                                            <img
                                                src={assets.comingSoon}
                                                className="object-center w-24 h-auto"
                                            />
                                        </div>
                                        <p className="text-center">
                                            Coming Soon
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <button>affh</button>
                        </div>
                    </section>
                    <section
                        className="border-[#DF5B6A] border-t-2 py-20 bg-contain bg-no-repeat bg-right-bottom"
                        style={{ backgroundImage: `url('${assets.bgAbout}')` }}
                    >
                        <div className="container mx-auto">
                            <div className="flex flex-col w-2/3 gap-8">
                                <h1 className="font-normal text-6xl font-serif leading-snug">
                                    E-Learning <br /> one step for a better
                                    future with hellowork-asia
                                </h1>
                                <div className="flex w-3/4">
                                    <div className="w-full flex flex-col gap-2">
                                        <h2 className="font-serif text-4xl">
                                            DOWNLOAD HELLOWORK-ASIA APP NOW!
                                        </h2>
                                        <p className="font-serif font-light">
                                            Fast, Simple & Delightful, All it
                                            takes is 30 seconds Download
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-48">
                                        <img src={assets.appStore} />
                                        <img src={assets.playStore} className="w-max" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </MainLayout>
        </>
    );
};

export default Home;
