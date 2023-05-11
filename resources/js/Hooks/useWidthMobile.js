import { useEffect, useState } from "react";

export default function useWidthMobile(widthDef = 768) {
    const [isMobile, setIsMobile] = useState();

    const getMobileWidth = () => window.innerWidth <= widthDef;
    useEffect(() => {
        const onResize = () => {
            setIsMobile(getMobileWidth());
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return isMobile;
}
