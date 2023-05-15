import { usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

const Toast = () => {
    const { flash, errors } = usePage().props;

    useEffect(() => {
        if (errors.error) {
            toast.error(errors.error, {
                position: "bottom-right",
                duration: 2000,
            });
        } else if (flash.success !== null) {
            toast.success(flash.success, {
                position: "bottom-right",
                duration: 2000,
            });
        } else if (flash.error !== null) {
            toast.error(flash.error, {
                position: "bottom-right",
                duration: 2000,
            });
        }
        console.log()
    }, [flash, errors]);

    return <Toaster />;
};

export default Toast;
