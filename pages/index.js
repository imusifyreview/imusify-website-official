import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import Header from '../containers/common/header'
import BannerSection from './layouts/sections/event/banner'
import BookingSection from './layouts/sections/event/booking'
import AboutSection from './layouts/sections/event/about'
import SpeakerSection from './layouts/sections/event/speaker'
import CryptoFutureSection from './layouts/sections/event/cryptofuture'
// import SponserSection from './layouts/sections/event/sponsor'
import ScheduleSection from './layouts/sections/event/schedule'
import TestimonialSection from './layouts/sections/event/testimonial'
import GallerySection from './layouts/sections/event/gallery'
import CounterSection from './layouts/sections/event/counter'
import SubscribeSection from './layouts/sections/event/subscribe'
import PricingSection from './layouts/sections/event/pricing'
import BlogSection from './layouts/sections/event/blog'
import FooterSection from './layouts/sections/event/footer'

const Event = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#e3154f')
        document.body.style.setProperty('--secondary', '#321575')
        document.body.style.setProperty('--light', '#321575')
        document.body.style.setProperty('--dark', '#e3154f')
    })

    return (
        <div>
            <Head>
                <title>Imusify - Empowering Crypto Music Platforms</title>
            </Head>

            <Header className="event nav-lg" />

            <BannerSection />

            <BookingSection />

            <AboutSection />

            <SpeakerSection />

            <CryptoFutureSection />

            <ScheduleSection />

            {/* <TestimonialSection /> */}

            {/* <GallerySection /> */}

            {/* <CounterSection /> */}

            {/* <SubscribeSection /> */}

            <PricingSection />

            <BlogSection />

            <FooterSection />

        </div>
    )
}

export default Event;