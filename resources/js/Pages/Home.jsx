import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <MainLayout>
                <div>Home</div>
            </MainLayout>
        </>
    );
};

export default Home;
