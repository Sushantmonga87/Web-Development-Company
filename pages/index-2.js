import React from 'react';
import Layout from "../components/layout/Layout";
import Home2_Section1_Slider2 from '../components/sections/Home2/Home2_Section1_Slider2';
import Home2_Section10_Feature3 from '../components/sections/Home2/Home2_Section10_Feature3';
import Home2_Section11_Faqs2 from '../components/sections/Home2/Home2_Section11_Faqs2';
import Home2_Section12_Video1 from '../components/sections/Home2/Home2_Section12_Video1';
import Home2_Section13_Contact2 from '../components/sections/Home2/Home2_Section13_Contact2';
import Home2_Section14_Call_To_Actions2 from '../components/sections/Home2/Home2_Section14_Call_To_Actions2';
import Home2_Section15_News2 from '../components/sections/Home2/Home2_Section15_News2';
import Home2_Section16_Client2 from '../components/sections/Home2/Home2_Section16_Client2';
import Home2_Section17_Map1 from '../components/sections/Home2/Home2_Section17_Map1';
import Home2_Section2_Feature2 from '../components/sections/Home2/Home2_Section2_Feature2';
import Home2_Section3_About2 from '../components/sections/Home2/Home2_Section3_About2';
import Home2_Section4_Funfact1 from '../components/sections/Home2/Home2_Section4_Funfact1';
import Home2_Section5_Service2 from '../components/sections/Home2/Home2_Section5_Service2';
// import Home2_Section6 from '../components/sections/Home2/Home2_Section6';
import Home2_Section7_Testimonial2 from '../components/sections/Home2/Home2_Section7_Testimonial2';
import Home2_Section8_Project2 from '../components/sections/Home2/Home2_Section8_Project2';
import Home2_Section9_Process1 from '../components/sections/Home2/Home2_Section9_Process1';

export default function Home2() {

    return (
        <>
            <Layout HeaderStyle="two">
                <Home2_Section1_Slider2 />
                <Home2_Section2_Feature2 />
                <Home2_Section3_About2 />
                <Home2_Section4_Funfact1 />
                <Home2_Section5_Service2 />
                {/* <Home2_Section6 /> */}
                <Home2_Section7_Testimonial2 />
                <Home2_Section8_Project2 />
                <Home2_Section9_Process1 />
                <Home2_Section10_Feature3 />
                <Home2_Section11_Faqs2 />
                <Home2_Section12_Video1 />
                <Home2_Section13_Contact2 />
                <Home2_Section14_Call_To_Actions2 />
                <Home2_Section15_News2 />
                <Home2_Section16_Client2 />
                <Home2_Section17_Map1 />
            </Layout>
        </>
    )
}
