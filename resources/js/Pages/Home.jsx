import React from "react";
import { Head, Link } from "@inertiajs/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MainLayout from "@/Layouts/MainLayout";
import { appStore, bgAbout, imgHero, playStore } from "@/Data/assets";
import "@splidejs/react-splide/css";

const Home = ({ courses }) => {
    const courseCategories = courses.filter(
        (object, index, self) =>
            index ===
            self.findIndex(
                (o) => o.category_course_id === object.category_course_id
            )
    );

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <MainLayout>
                <div className="flex flex-col">
                    <section className="container mx-auto flex flex-col justify-center items-center py-8">
                        <div className="inline-flex items-center rounded-full bg-white px-2 py-3 gap-2 w-fit">
                            <div className="w-auto sm:w-48 md:w-72 xl:w-[360px] px-6 sm:px-0 text-center rounded-full bg-black text-white py-3">
                                Learn and Get Certificates
                            </div>
                            <div className="w-auto sm:w-48 md:w-72 xl:w-[360px] px-6 sm:px-0 text-center">
                                Build Your Career
                            </div>
                        </div>
                    </section>
                    <section className="flex justify-center">
                        <img src={imgHero} className="w-11/12" />
                    </section>
                    <section className="container mx-auto flex flex-col justify-center items-center py-8">
                        <Splide
                            options={{
                                breakpoints: {
                                    1280: {
                                        width: "100%",
                                    },
                                    996: {
                                        perPage: 3,
                                    },
                                    768: {
                                        perPage: 2,
                                    },
                                    480: {
                                        perPage: 1,
                                    },
                                },
                                pagination: false,
                                type: "loop",
                                perPage: 3,
                                gap: "1rem",
                                width: 1205,
                                autoplay: true,
                                interval: 2000,
                                arrows: true,
                            }}
                        >
                            {courseCategories.map((course, index) => (
                                <SplideSlide key={index}>
                                    <Link
                                        href={`/course?id=${course.category_course_id}`}
                                    >
                                        <div className="flex flex-col justify-center items-center gap-2">
                                            <div className="bg-white rounded-full w-32 h-32 flex justify-center items-center">
                                                <img
                                                    src={`${
                                                        import.meta.env
                                                            .VITE_URL_COURSE_ASSETS
                                                    }${course.image}`}
                                                    className="object-center w-24 h-auto"
                                                />
                                            </div>
                                            <p className="text-center">
                                                {course.course_category.name}
                                            </p>
                                        </div>
                                    </Link>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </section>
                    <section
                        className={`border-[#DF5B6A] border-t-2 py-20 bg-contain bg-no-repeat bg-right-bottom lg:bg-[image:var(--image-about-url)]`}
                        style={{ "--image-about-url": `url('${bgAbout}')` }}
                    >
                        <div className="container mx-auto">
                            <div className="w-4/5 flex flex-col md:w-2/3 gap-8 mx-8 md:mx-4">
                                <h1 className="text-4xl font-normal md:text-5xl lg:text-6xl font-serif leading-snug">
                                    E-Learning <br /> one step for a better
                                    future with hellowork-asia
                                </h1>
                                <div className="flex md:w-3/4 gap-8">
                                    <div className="w-full flex flex-col gap-2">
                                        <h2 className="text-3xl font-serif md:text-4xl">
                                            DOWNLOAD HELLOWORK-ASIA APP NOW!
                                        </h2>
                                        <p className="font-serif font-light">
                                            Fast, Simple & Delightful, All it
                                            takes is 30 seconds Download
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-48">
                                        <Link href="https://apps.apple.com/id/app/hellowork-asia/id1513969659">
                                            <img src={appStore} />
                                        </Link>
                                        <Link href="https://play.google.com/store/apps/details?id=com.hellowork_asia.app&hl=en">
                                            <img
                                                src={playStore}
                                                className="w-max"
                                            />
                                        </Link>
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
