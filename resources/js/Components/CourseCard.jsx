import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import Button from "./Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CourseCard = ({ course, auth, courseRedeem }) => {
    const [copy, setCopy] = useState(false);
    const { data, post, processing } = useForm({
        voucher: course.course_voucher?.id || 0,
        course: course?.id || "",
    });

    const checkRedeem = (voucher, user) => {
        return courseRedeem.some((item) => {
            return item.id_voucher === voucher && item.id_user === user;
        });
    };

    const handleCopy = () => {
        setTimeout(() => {
            setCopy(true);
        }, 2000);
        setCopy(false);
    };

    const submit = (event) => {
        event.preventDefault();
        post("/course/redeem", {
            preserveScroll: true,
        });
        return false;
    };

    return (
        <form
            className="max-w-sm rounded-lg overflow-hidden shadow-md my-12"
            onSubmit={submit}
        >
            <img
                src={import.meta.env.VITE_URL_COURSE_ASSETS + course?.image}
                className="object-cover w-full"
            />
            <div className="py-4 flex flex-col gap-4">
                <div className="px-6 gap-2 flex flex-col">
                    <h2 className="text-2xl font-medium">{course?.name}</h2>
                    <span className="inline-block bg-slate-200 rounded-full px-3 py-1 font-semibold text-secondary text-sm w-fit">
                        {course?.course_category?.name}
                    </span>
                </div>
                <div className="px-6 mb-2 flex gap-2 items-center justify-center">
                    <input
                        type="hidden"
                        value={course?.course_voucher?.id || ""}
                        name="voucher"
                        id="voucher"
                    />
                    <input
                        type="hidden"
                        value={course?.id || ""}
                        name="course"
                        id="course"
                    />
                    {checkRedeem(course?.course_voucher?.id, auth?.user?.id) ? (
                        <>
                            <Button
                                className="w-full justify-center"
                                variant="primary"
                                disable={true}
                            >
                                Redeemed
                            </Button>
                            <div className="px-3 py-2.5 bg-slate-200 rounded-md inline-flex justify-center items-center gap-3">
                                <span>{course?.course_voucher?.code}</span>
                                <CopyToClipboard
                                    text={course?.course_voucher?.code}
                                >
                                    <button className="relative" type="button" onClick={handleCopy}>
                                        <FaCopy />
                                        {!copy && (
                                            <span
                                                class={`pointer-events-none absolute -bottom-12 -left-28 w-max bg-zinc-200 px-3 py-1 rounded-md`}
                                            >
                                                Code has been copied
                                            </span>
                                        )}
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </>
                    ) : !course?.course_voucher ? (
                        <Button
                            className="w-full justify-center"
                            variant="primary"
                            type="submit"
                            disable={true}
                        >
                            Voucher cannot Redeemed
                        </Button>
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
    );
};

export default CourseCard;
