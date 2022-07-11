import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Movie from '../components/Movie';

const MovieScreen = () => {
const [ movies, setMovies ] = useState([]);

  const fetchMovie = async () => {
    try {
      let response = await fetch(`https://imdb-api.com/en/API/InTheaters/k_u3lgb90e`)
      let data = await response.json();

      setMovies(data.items);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, [])

    return (
        <SafeAreaView>
            <FlatList 
                data={movies}
                renderItem={({ item }) => ( <Movie {...item}/> )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default MovieScreen;
