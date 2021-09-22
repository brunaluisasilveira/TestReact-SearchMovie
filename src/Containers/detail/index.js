import React, { useState, useEffect } from "react";

import axios from 'axios'

import Video from '../../assets/video.png'
import Movies from '../../assets/movies.png'

import { useParams } from "react-router-dom";

import { Container, Image, ContainerItens, H2 } from "../../Containers/detail/styles"


export const Detail = () => {
    const [data, setData] = useState({})

    let { id } = useParams()

    async function fetchMovieDetail() {

        const result = await axios.get(`http://omdbapi.com/?apikey=68b7a486&i=${id}&plot=full`)

        setData(result.data)
    }

    useEffect(() => {
        const getDetail = async () => {
            await fetchMovieDetail()
        }
        getDetail()
    })


    return (

        <Container>

            <Image alt="movie" src={Video} />

            <ContainerItens>

                <>
                    <img src={data.Poster} alt='poster'/>
                </>

                <H2>
                    <img src={Movies} alt="movie" />
                </H2>

            </ContainerItens>
        </Container>
    )
}