import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

export default function Dashboard({ auth, errors, courseRedeemed }) {
    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setTimeout(() => {
            setCopy(true);
        }, 2000);
        setCopy(false);
    };
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
                        <div className="m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {courseRedeemed &&
                                courseRedeemed.map((voucher, index) => (
                                    <div
                                        className="max-w-sm rounded-md overflow-hidden shadow-md my-12 flex flex-col justify-between"
                                        key={index}
                                    >
                                        <img
                                            src={
                                                import.meta.env
                                                    .VITE_URL_COURSE_ASSETS +
                                                voucher.image
                                            }
                                            className="object-cover w-full"
                                        />
                                        <div className="py-4 flex flex-col gap-4">
                                            <div className="px-6 gap-2 flex flex-col">
                                                <h2 className="text-2xl font-medium">
                                                    {voucher.course_name}
                                                </h2>
                                                <span className="inline-block bg-slate-200 rounded-full px-3 py-1 font-semibold text-secondary text-sm w-fit">
                                                    {
                                                        voucher.category_course_name
                                                    }
                                                </span>
                                            </div>
                                            <div className="px-6 mb-2 flex gap-2 items-center justify-center">
                                                <div className="px-3 py-2.5 bg-slate-200 rounded-md inline-flex justify-center items-center gap-3 my-4">
                                                    <span>{voucher.code}</span>
                                                    <CopyToClipboard
                                                        text={voucher.code}
                                                    >
                                                        <button
                                                            className="relative"
                                                            type="button"
                                                            onClick={handleCopy}
                                                        >
                                                            <FaCopy />
                                                            {!copy && (
                                                                <span
                                                                    class={`pointer-events-none absolute -bottom-12 -left-28 w-max bg-zinc-200 px-3 py-1 rounded-md`}
                                                                >
                                                                    Code has
                                                                    been copied
                                                                </span>
                                                            )}
                                                        </button>
                                                    </CopyToClipboard>
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
