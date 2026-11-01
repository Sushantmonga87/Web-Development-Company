import React from "react";
import Layout from "../components/layout/Layout";
import Home3_Section1_Banner1 from "../components/sections/Home3/Home3_Section1_Banner1";
import Home3_Section10_Testimonia3 from "../components/sections/Home3/Home3_Section10_Testimonia3";
import Home3_Section11_News3 from "../components/sections/Home3/Home3_Section11_News3";
import Home3_Section12_Contact3 from "../components/sections/Home3/Home3_Section12_Contact3";
import Home3_Section13_Client2 from "../components/sections/Home3/Home3_Section13_Client2";
import Home3_Section2_Service3 from "../components/sections/Home3/Home3_Section2_Service3";
import Home3_Section3_About3 from "../components/sections/Home3/Home3_Section3_About3";
import Home3_Section4_Feature4 from "../components/sections/Home3/Home3_Section4_Feature4";
import Home3_Section5_Project3 from "../components/sections/Home3/Home3_Section5_Project3";
import Home3_Section6_Why_Choose_Us2 from "../components/sections/Home3/Home3_Section6_Why_Choose_Us2";
import Home3_Section7_Team1 from "../components/sections/Home3/Home3_Section7_Team1";
import Home3_Section8_Work1 from "../components/sections/Home3/Home3_Section8_Work1";
import Home3_Section9_Pricing1 from "../components/sections/Home3/Home3_Section9_Pricing1";

export default function Home3() {
    return (
        <>
            <Layout HeaderStyle="three">
                <Home3_Section1_Banner1 />
                <Home3_Section2_Service3 />
                <Home3_Section3_About3 />
                <Home3_Section4_Feature4 />
                <Home3_Section5_Project3 />
                <Home3_Section6_Why_Choose_Us2 />
                <Home3_Section7_Team1 />
                <Home3_Section8_Work1 />
                <Home3_Section9_Pricing1 />
                <Home3_Section10_Testimonia3 />
                <Home3_Section11_News3 />
                <Home3_Section12_Contact3 />
                <Home3_Section13_Client2 />
            </Layout>
        </>
    );
}
