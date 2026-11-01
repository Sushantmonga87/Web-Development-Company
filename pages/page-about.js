import React from 'react';
import Layout from "../components/layout/Layout";
import Home1_Section2_About1 from "../components/sections/Home1/Home1_Section2_About1";
import Home1_Section4_feature1 from "../components/sections/Home1/Home1_Section4_feature1";
import Home1_Section3_Service1 from "../components/sections/Home1/Home1_Section3_Service1";
import Home1_Section5_Project1 from "../components/sections/Home1/Home1_Section5_Project1";
import Home1_Section8_Clients1 from "../components/sections/Home1/Home1_Section8_Clients1";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="About Us" />
                <Home1_Section2_About1 />
                <Home1_Section3_Service1 />
                <Home1_Section4_feature1 />
                <Home1_Section5_Project1 />
                <Home1_Section8_Clients1 />
            </Layout>
        </>
    )
}
