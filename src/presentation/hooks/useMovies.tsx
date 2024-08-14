import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"

import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"

let popularPageNumber = 1

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
  const [popular, setPopular] = useState<Movie[]>([])
  const [rated, setRated] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    initialLoad()
  }, [])

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher)
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher)
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher)
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher)

    const [
      nowPlayingMovies,
      topRatedMovies,
      popularMovies,
      upcomingMovies,
    ] = await Promise.all([
      nowPlayingPromise,
      topRatedPromise,
      popularPromise,
      upcomingPromise,
    ])

    setIsLoading(false)
    setNowPlaying(nowPlayingMovies)
    setPopular(popularMovies)
    setRated(topRatedMovies)
    setUpcoming(upcomingMovies)
  }

  return {
    isLoading,
    nowPlaying,
    popular,
    upcoming,
    rated,

    popularNextPage: async () => {
      popularPageNumber++
      const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
        page: popularPageNumber
      })
      setPopular(prev => [...prev, ...popularMovies])
    }
  }
}
