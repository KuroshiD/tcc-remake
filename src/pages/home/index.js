import React from 'react'
import { Container } from './styles'
import Search from '../../components/Search'
import Carrousel from '../../components/Carrousel'
import AnimeRow from '../../components/AnimeRow'

export default function index() {
    return (
        <Container>
            <Search />
            <Carrousel />
            <AnimeRow />
        </Container>
    )
}
