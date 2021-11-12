import React from "react"
import { Carousel } from "3d-react-carousal"
import { Container } from './styles'
import Carousel1 from '../../assets/img/carousel1.jpg'
import Carousel2 from '../../assets/img/carousel2.jpg'
import Carousel3 from '../../assets/img/carousel3.jpg'

export default function index() {
  const slides = [
    <img src={Carousel1} alt="1" style={{height: "400px", width: "100%"}} />,
    <img src={Carousel2} alt="2" style={{height: "400px", width: "100%"}} />,
    <img src={Carousel3} alt="3" style={{height: "400px", width: "100%"}}/>,
  ]

  return (
    
    <Container>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        <Carousel slides={slides} autoplay={false} />
    </Container>
    
    )
}
