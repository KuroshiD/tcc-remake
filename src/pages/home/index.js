import React from 'react'
import { Container } from './styles'
import Search from '../../components/Search'
import Carrousel from '../../components/Carrousel'
import Animes from '../../components/Animes'

export default function index() {
    return (
        <Container>
            <Search />
            <Carrousel />
            <Animes />
        </Container>
    )
}
