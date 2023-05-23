import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import CourseCard from "@/Components/CourseCard";

const CourseDetail = ({ course, courseId, courseAll, auth, courseRedeem }) => {
    const { data, post, processing } = useForm({
        voucher: 0,
        course: courseId,
    });

    const updateClipboard = (newClip) => {
        navigator.clipboard.writeText(newClip).then(
            () => console.log("copied"),
            () => console.log("error copied")
        );
    };

    const submit = (event) => {
        event.preventDefault();
        post("/course/redeem", {
            preserveScroll: true,
        });
    };

    return (
        <MainLayout>
            <Head>
                <title>
                    {course
                        ? course[0]?.course_category?.name
                        : "Daftar Course"}
                </title>
            </Head>
            <div className="w-full bg-primary h-80 flex flex-col gap-4 justify-center items-center pt-24">
                <h1 className="text-black text-4xl font-semibold">
                    {course
                        ? course[0]?.course_category?.name
                        : "Daftar Course"}
                </h1>
                <span className="text-secondary">Home - Course</span>
            </div>
            <div className="container mx-auto flex gap-4">
                {course ? (
                    course.map((course, index) => (
                        <CourseCard
                            key={index}
                            onSubmit={submit}
                            course={course}
                            data={data}
                            processing={processing}
                            auth={auth}
                            courseRedeem={courseRedeem}
                        />
                    ))
                ) : courseAll ? (
                    courseAll.map((course, index) => (
                        <CourseCard
                            key={index}
                            onSubmit={submit}
                            course={course}
                            data={data}
                            processing={processing}
                            auth={auth}
                            courseRedeem={courseRedeem}
                        />
                    ))
                ) : (
                    <p>euweuh course</p>
                )}
            </div>
        </MainLayout>
    );
};

export default CourseDetail;
