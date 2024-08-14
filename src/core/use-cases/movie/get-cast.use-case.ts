import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBPCastResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entity";

export const getCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieDBPCastResponse>(`/${movieId}/credits`)
    const actors = cast.map(CastMapper.fromDBCastToEntity)
    return actors
  } catch (error) {
    throw new Error(`Cannot get movie cast ${movieId}`)
  }
}
