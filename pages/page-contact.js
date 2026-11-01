import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";
import Home2_Section17_Map1 from '../components/sections/Home2/Home2_Section17_Map1';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Contact" />
                <ContactInner />
                <Home2_Section17_Map1 />
            </Layout>
        </>
    )
}
