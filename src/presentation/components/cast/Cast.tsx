import { Image, StyleSheet, Text, View } from "react-native"
import { Cast as CastEntity } from "../../../core/entities/cast.entity"

interface Props {
  cast: CastEntity
}
export const Cast = ({ cast }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: cast.avatar }}
        style={styles.image}
      />
      <View style={styles.castInfo}>
        <Text style={styles.textName}>{cast.name}</Text>
        <Text style={styles.textCharacter}>{cast.character}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    marginRight: 10,
    paddingLeft: 10,
    width: 100,
  },
  castInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  image: {
    borderRadius: 10,
    height: 150,
    width: 100,
  },
  textName: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold'
  },
  textCharacter: {
    color: '#000',
    fontSize: 12,
    opacity: 0.7
  }
})
