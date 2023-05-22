import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FaCopy } from "react-icons/fa";

export default function Dashboard({ auth, errors, course, courseRedeemed }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex gap-4 m-8">
                            {course &&
                                course.map((voucher, index) => (
                                    <div
                                        className="max-w-sm rounded-md overflow-hidden shadow-md my-12"
                                        key={index}
                                    >
                                        <img
                                            src={
                                                import.meta.env
                                                    .VITE_URL_COURSE_ASSETS +
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
                                                    {
                                                        voucher.course
                                                            .course_category
                                                            .name
                                                    }
                                                </span>
                                            </div>
                                            <div className="px-6 mb-2 flex gap-2 items-center justify-center">
                                                <div className="px-3 py-2.5 bg-slate-200 rounded-md inline-flex justify-center items-center gap-3">
                                                    <span>{voucher.code}</span>
                                                    <button
                                                        className="relative"
                                                        type="button"
                                                    >
                                                        <FaCopy />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
