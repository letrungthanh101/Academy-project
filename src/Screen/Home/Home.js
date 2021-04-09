import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import CourseList from '../../Components/Courses/CourseList'
import ContentCourse from '../Content/ContentCourse'
import CategoriesCourse from '../../Components/Courses/CategoriesCourse'
import Testimonials from '../Testimonials/Testimonials'
// import Founder from '../Founder/Founder'
import Trusted from '../Trusted/Trusted'
import Footer from '../Footer/Footer'
import StudentViewing from '../StudentViewing/StudentViewing'
import Countdown from '../Countdown/Countdown'
import Teacher from '../Teacher/Teacher'
import OurBlog from "../OurBlog/OurBLog"
export default function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <CourseList/>
            <StudentViewing/>
            <ContentCourse/>
            <CategoriesCourse/>
            <Testimonials/>
            <Countdown/>
            <Teacher/>
            <OurBlog/>
            {/* <Founder/> */}
            <Trusted/>
            <Footer/>
        </div>
    )
}
