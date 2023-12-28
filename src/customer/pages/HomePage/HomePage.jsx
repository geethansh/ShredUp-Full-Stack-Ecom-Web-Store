import React from "react"
import MainCarousel from "../../components/HomeCarousel/MainCarousel"
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel"
import { mens_kurta } from "../../../Data/Men/mens_kurta"
const HomePage =() => {
    return(
        <div><MainCarousel/>
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarousel data={mens_kurta} sectionName={"Equipment"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"protein"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"supplements"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"fit foods"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"accesories"}/>
            
        </div>
            </div>
    )
}
export default HomePage