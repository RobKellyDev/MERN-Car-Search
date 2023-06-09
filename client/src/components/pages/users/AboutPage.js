import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../../layout/user/navbar/Navbar'
import { AboutBanner } from '../../layout/user/about/AboutBanner'
import { AboutUs, ContactForm, ContactText } from '../../layout/user/about/About'
import { HoursOfOperation } from '../../layout/ui/HoursOfOperation'
import { Logo, EmpireHeader, EmpireFooter, NavBarContact } from '../../layout/ui/Layout'
import Map from '../../layout/ui/Map'
const { Content } = Layout;




const AboutPage = () => {

    return (
        <Layout className="layout">
            <EmpireHeader>
                <Logo href="/" />
                <Navbar />
                <NavBarContact />
            </EmpireHeader>
            <Content >
                <AboutBanner />
                <AboutUs />
                <ContactForm />
                <ContactText />


                <HoursOfOperation />
                <Map />
            </Content>
            <EmpireFooter />
        </Layout>
    )
}

export default AboutPage