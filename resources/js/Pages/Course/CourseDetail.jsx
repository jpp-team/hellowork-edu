import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head, router, useForm } from "@inertiajs/react";
import CourseCard from "@/Components/CourseCard";

const CourseDetail = ({ courses, courseId, auth, courseRedeem }) => {
    console.log("courses : ", courses);
    const { data, processing } = useForm({
        voucher: 0,
        course: courseId,
    });

    const submit = (event) => {
        event.preventDefault();
        return false;
    };

    return (
        <MainLayout>
            <Head>
                <title>
                    {courses
                        ? courses[0]?.course_category?.name
                        : "Daftar Course"}
                </title>
            </Head>
            <div className="w-full bg-primary h-80 flex flex-col gap-4 justify-center items-center pt-24">
                <h1 className="text-black text-4xl font-semibold">
                    {courses
                        ? courses[0]?.course_category?.name
                        : "Daftar Course"}
                </h1>
                <span className="text-secondary">Home - Course</span>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {courses?.length &&
                    courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            onSubmit={submit}
                            course={course}
                            data={data}
                            processing={processing}
                            auth={auth}
                            courseRedeem={courseRedeem}
                        />
                    ))}
                {courses.length < 1 && <p>Tidak ada course</p>}
            </div>
        </MainLayout>
    );
};

export default CourseDetail;
