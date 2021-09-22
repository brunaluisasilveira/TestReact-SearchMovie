import React, { useState, useRef } from 'react'

import axios from 'axios'
import Vetor3 from '../../assets/vetor3.png'
import Video from '../../assets/video.png'
import Movies from '../../assets/movies.png'

import { Link } from 'react-router-dom'
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, H2 } from "../../styles"

export const Search = () => {
    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState()
    const [history, setHistory] = useState([])
    const [message, setMessage] = useState()
    const inputMovie = useRef()


    async function addNewMovie() { // eslint-disable-line no-unused-vars

        const { data: newMovie } = await axios.post(" http://www.omdbapi.com/?apikey=69a55f17", {
            filme: inputMovie.current.value,
        })

        setMovies([...movies, newMovie])
    }


    async function fetchMovies() {
        const result = await axios.get(`http://www.omdbapi.com/?apikey=69a55f17&t=${title}`)
        const dataHistory = history

        if (result.data.Error) {
            setMessage('Título não encontrado!')
            return
        }

        setMessage(`Título encontrado: ${result.data.Title}`)
        dataHistory.push(result.data)
        setHistory(dataHistory)
        setTitle('')

        setMovies()
    }

    const onChangeHandler = event => {
        setTitle(event.target.value)
    }

    return (
        <Container>
            <Image alt="logo-imagem" src={Vetor3} />
            <ContainerItens>
                <img src={Video} alt="movie" />

                <InputLabel>Nome do Filme:</InputLabel>
                <Input onChange={onChangeHandler} value={title} placeholder="Coloque o nome do filme aqui" />

                <Button onClick={fetchMovies}>Pesquisar</Button>

                <H1>
                    {message}
                </H1>

                <>
                    {
                        history.map((movie) => (
                            <li>
                                <Link to={`/detail/${movie.imdbID}`}>{movie.Title}</Link>
                            </li>
                        ))
                    }
                </>
                <H2>
                    <img src={Movies} alt="movie" />
                </H2>

            </ContainerItens>
        </Container>

    )

}
