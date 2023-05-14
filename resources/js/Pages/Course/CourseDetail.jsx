import Button from "@/Components/Button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const CourseDetail = ({ course }) => {
    return (
        <MainLayout>
            <Head>
                <title>{course.name}</title>
            </Head>
            <div className="w-full bg-primary h-80 flex flex-col gap-4 justify-center items-center pt-24">
                <h1 className="text-black text-4xl font-semibold">
                    {course.name}
                </h1>
                <span className="text-secondary">Home - Course</span>
            </div>
            <div className="container mx-auto flex gap-2">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-md my-12">
                    <img
                        src={
                            import.meta.env.VITE_URL_COURSE_ASSETS +
                            course.image
                        }
                        className="object-cover w-full"
                    />
                    <div className="py-4 flex flex-col gap-4">
                        <div className="px-6 gap-2 flex flex-col">
                            <h2 className="text-2xl font-medium">
                                {course.name}
                            </h2>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 font-semibold text-secondary text-sm w-fit">
                                {course.course_category.name}
                            </span>
                        </div>
                        <div className="px-6 mb-2">
                            <Button
                                className="w-full justify-center"
                                variant="primary"
                            >
                                Redeem
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CourseDetail;
