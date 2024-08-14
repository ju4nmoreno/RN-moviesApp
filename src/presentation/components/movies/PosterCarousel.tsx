import { View } from "react-native"
import { Movie } from "../../../core/entities/movie.entity"
import { ScrollView } from "react-native-gesture-handler"
import { MoviePoster } from "./MoviePoster"

interface Props {
  movies: Movie[]
  height?: number
  width?: number
}

export const PosterCarousel = ({ movies, height = 440, width = 300 }: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          movies && movies.map((movie) => (
            <MoviePoster key={movie.id} movie={movie} width={width} height={height} />)
          )}
      </ScrollView>
    </View>
  )
}
