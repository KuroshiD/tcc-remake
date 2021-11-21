import React, { useState, useEffect } from "react"
import { Container, Text } from "./styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/swiper.min.css"
import "swiper/swiper-bundle.min.css"

import animes from "../../json/animes.json"
import actionAnimes from "../../json/actionAnimes.json"
const getWindowDimensions = () => {
  const width = window.innerWidth
  return width
}

export default function Index() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const getSlidesPerView = () => {
    if (windowDimensions < 480) {
      return 2
    } else if (windowDimensions <= 720) {
      return 3
    } else if (windowDimensions <= 992) {
      return 4
    } else if (windowDimensions <= 1200) {
      return 5
    } else if (windowDimensions <= 1400) {
      return 6
    } else if (windowDimensions <= 1600) {
      return 7
    } else if (windowDimensions <= 1700) {
      return 7
    } else if (windowDimensions < 1800) {
      return 8
    } else {
      return 9
    }
  }

  return (
    <Container>
      <Text>Comedy</Text>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={getSlidesPerView()}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log("test")}
        onSlideChange={() => console.log("slide change")}
        style={{
          width: "100%",
        }}
      >
        
        {animes.anime.slice(0, 50).map((item, index) => (
          <SwiperSlide>
            <img
              src={item.image_url}
              alt={item.title}
              style={{ height: "318px", width: "215px", cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Text>Action</Text>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={getSlidesPerView()}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log("test")}
        onSlideChange={() => console.log("slide change")}
        style={{
          width: "100%",
        }}
      >
        
        {actionAnimes.anime.slice(0, 50).map((item, index) => (
          <SwiperSlide>
            <img
              src={item.image_url}
              alt={item.title}
              style={{ height: "318px", width: "215px", cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
