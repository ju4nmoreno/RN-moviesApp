import { StyleSheet, View } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"
import { PosterCarousel } from "../../components/movies/PosterCarousel"
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel"
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader"

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets()
  const { isLoading, nowPlaying, popular, upcoming, rated, popularNextPage } = useMovies()

  if (isLoading) return <FullScreenLoader />

  return (
    <ScrollView>
      <View style={{ ...styles.container, marginTop: top + 20, }}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel movies={popular} title="Popular"
          loadNextPage={popularNextPage}
        />
        <HorizontalCarousel movies={upcoming} title="Upcoming" />
        <HorizontalCarousel movies={rated} title="Top Rated" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20, paddingHorizontal: 10
  }
})
