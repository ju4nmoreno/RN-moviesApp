import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBPMovie } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBPMovie>(`/${movieId}`)
    const fullMovie = MovieMapper.fromMovieDBToEntity(movie)

    return fullMovie
  } catch (error) {
    throw new Error(`Connot get movie by id ${movieId}`
    )
  }
}
