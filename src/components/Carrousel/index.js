import React, { useState, useEffect } from "react"
import { Container } from "./styles"
import Carousel from "react-gallery-carousel"
import "react-gallery-carousel/dist/index.css"
import "./styles.css"
import Carousel1 from "../../assets/img/carousel1.jpg"
import Carousel2 from "../../assets/img/carousel2.jpg"
import Carousel3 from "../../assets/img/carousel3.jpg"

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

  const getImageSize = () => {
    if (windowDimensions > 1600) {
      return ("750px")
    } else if (windowDimensions > 1400) {
      return "650px"
    } else if (windowDimensions > 1200) {
      return "550px"
    } else if (windowDimensions > 800) {
      return "450px"
    } else if (windowDimensions > 480) {
      return "350px"
    } 
    
  }
  const images = [{ src: Carousel1 }, { src: Carousel2 }, { src: Carousel3 }]

  return (
    <Container>
      <Carousel images={images} style={{ height: getImageSize()}} />
    </Container>
  )
}
