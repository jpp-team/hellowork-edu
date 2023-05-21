import React from "react";
import Button from "@/Components/Button";
import MainLayout from "@/Layouts/MainLayout";
import { FaCopy } from "react-icons/fa";
import { Head, useForm } from "@inertiajs/react";

const CourseDetail = ({
    course,
    courseVoucher,
    courseId,
    courseAll,
    auth,
    courseRedeem,
}) => {
    const { data, post, processing } = useForm({
        voucher: 0,
        course: courseId,
    });

    const [copied, setCopied] = React.useState(false);

    console.log(auth);
    console.log("courseRedeem", courseRedeem);
    console.log("courseVoucher", courseVoucher);

    const checkRedeem = (voucher, user) => {
        return courseRedeem.some((item) => {
            return item.id_voucher === voucher && item.id_user === user;
        });
    };

    const updateClipboard = (newClip) => {
        navigator.clipboard.writeText(newClip).then(
            () => console.log("copied"),
            () => console.log("error copied")
        );
    };

    console.log("checkRedeem", checkRedeem(4, 613));

    const submit = (event) => {
        event.preventDefault();
        post("/course/redeem", {
            preserveScroll: true,
        });
    };

    return (
        <MainLayout>
            <Head>
                <title>{course?.name ?? "Daftar Course"}</title>
            </Head>
            <div className="w-full bg-primary h-80 flex flex-col gap-4 justify-center items-center pt-24">
                <h1 className="text-black text-4xl font-semibold">
                    {course?.name ?? "Daftar Course"}
                </h1>
                <span className="text-secondary">Home - Course</span>
            </div>
            <div className="container mx-auto flex gap-4">
                {course ? (
                    <>
                        {courseVoucher ? (
                            courseVoucher.map((voucher, index) => (
                                <form
                                    className="max-w-sm rounded-lg overflow-hidden shadow-md my-12"
                                    onSubmit={submit}
                                    key={index}
                                >
                                    <img
                                        src={
                                            import.meta.env
                                                .VITE_URL_COURSE_ASSETS +
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
                                        <div className="px-6 mb-2 flex gap-2 items-center justify-center">
                                            <input
                                                type="hidden"
                                                value={voucher.id}
                                                name="voucher"
                                                id="voucher"
                                            />
                                            <input
                                                type="hidden"
                                                value={data.course}
                                                name="course"
                                                id="course"
                                            />
                                            {checkRedeem(
                                                voucher.id,
                                                auth.user.id
                                            ) ? (
                                                <>
                                                    <Button
                                                        className="w-full justify-center"
                                                        variant="primary"
                                                        disable={true}
                                                    >
                                                        Redeemed
                                                    </Button>
                                                    <div className="px-3 py-2.5 bg-slate-200 rounded-md inline-flex justify-center items-center gap-3">
                                                        <span>
                                                            {voucher.code}
                                                        </span>
                                                        <button
                                                            className="relative"
                                                            type="button"
                                                        >
                                                            <FaCopy />
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <Button
                                                    className="w-full justify-center"
                                                    variant="primary"
                                                    type="submit"
                                                    disable={processing}
                                                >
                                                    Redeem
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            ))
                        ) : (
                            <div className="my-12 w-full">
                                <p className="text-2xl font-semibold text-center">
                                    Voucher Course Tidak Ada
                                </p>
                            </div>
                        )}
                    </>
                ) : courseAll ? (
                    courseAll.map((voucher, index) => (
                        <form
                            className="max-w-sm rounded-lg overflow-hidden shadow-md my-12"
                            onSubmit={submit}
                            key={index}
                        >
                            <img
                                src={
                                    import.meta.env.VITE_URL_COURSE_ASSETS +
                                    voucher.course.image
                                }
                                className="object-cover w-full"
                            />
                            <div className="py-4 flex flex-col gap-4">
                                <div className="px-6 gap-2 flex flex-col">
                                    <h2 className="text-2xl font-medium">
                                        {voucher.course.name}
                                    </h2>
                                    <span className="inline-block bg-slate-200 rounded-full px-3 py-1 font-semibold text-secondary text-sm w-fit">
                                        {voucher.course.course_category.name}
                                    </span>
                                </div>
                                <div className="px-6 mb-2 flex gap-2 items-center justify-center">
                                    <input
                                        type="hidden"
                                        value={voucher.id}
                                        name="voucher"
                                        id="voucher"
                                    />
                                    <input
                                        type="hidden"
                                        value={data.course}
                                        name="course"
                                        id="course"
                                    />
                                    {checkRedeem(voucher.id, auth.user.id) ? (
                                        <>
                                            <Button
                                                className="w-full justify-center"
                                                variant="primary"
                                                disable={true}
                                            >
                                                Redeemed
                                            </Button>
                                            <div className="px-3 py-2.5 bg-slate-200 rounded-md inline-flex justify-center items-center gap-3">
                                                <span>{voucher.code}</span>
                                                <button
                                                    className="relative"
                                                    type="button"
                                                >
                                                    <FaCopy />
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <Button
                                            className="w-full justify-center"
                                            variant="primary"
                                            type="submit"
                                            disable={processing}
                                        >
                                            Redeem
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </form>
                    ))
                ) : (
                    <div className="my-12 w-full">
                        <p className="text-2xl font-semibold text-center">
                            Course Tidak Ada
                        </p>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default CourseDetail;
