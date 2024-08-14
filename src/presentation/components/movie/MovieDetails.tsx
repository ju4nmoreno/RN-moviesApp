import { StyleSheet, Text, View } from "react-native"
import { FullMovie } from "../../../core/entities/movie.entity"
import { Formatter } from "../../../config/helpers/formatter"
import { Cast } from "../../../core/entities/cast.entity"
import { FlatList } from "react-native-gesture-handler"
import { Cast as CastComponent } from "../cast/Cast"

interface Props {
  movie: FullMovie
  cast: Cast[]
}

export const MovieDetails = ({ movie, cast = [] }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerList}>
          <Text style={styles.textList}>{movie.rating}</Text>
          <Text style={styles.textList}>- {movie.genres.join(', ')}</Text>
        </View>
        <Text style={styles.subHeadline}>History</Text>
        <Text style={styles.textReguar}>{movie.description}</Text>
        <Text style={styles.subHeadline}>Budget</Text>
        <Text style={styles.textReguar}>{Formatter.currency(movie.budget)}</Text>
      </View>

      <View style={styles.containerCast}>
        <Text style={styles.subHeadline}>Cast</Text>
        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CastComponent cast={item} />}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  headline: {
    color: '#000'
  },
  containerList: {
    flexDirection: 'row'
  },
  subHeadline: {
    color: '#000',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textList: {
    marginLeft: 5,
    color: '#000'
  },
  textReguar: {
    color: '#000',
    fontSize: 16
  },
  containerCast: {
    marginTop: 10,
    marginBottom: 50,
    paddingHorizontal: 20
  }
})
