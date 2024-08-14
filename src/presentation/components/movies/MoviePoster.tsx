import { Image, Pressable, StyleSheet, View } from "react-native"
import { Movie } from "../../../core/entities/movie.entity"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParams } from "../../navigation/Navigation"

interface Props {
  height?: number
  movie: Movie
  width?: number
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.btn,
        height,
        opacity: pressed ? .5 : 1,
        width,
      })}
      onPress={() => navigation.navigate('Detail', { movieId: movie.id })}
    >
      <View
        style={{ ...styles.imageContainer, width, height }}
      >
        <Image
          style={styles.image}
          source={{ uri: movie.poster }}
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    gap: 10,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  btn: {
    marginHorizontal: 5,
    paddingBottom: 20,
    paddingHorizontal: 7,

  }
})

