import React, { useState, useEffect } from 'react';
import { Text, FlatList, View } from 'react-native';

const Movie = ({ title, releaseYear, id }) => (    // add the id here
    <View style={{backgroundColor:'lightblue'}}>
        <Text>{title}, {releaseYear}, {id}</Text>    // and here
    </View>
);

const APIdemo = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const getMovies = async () => {
        try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          setData(json.movies); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMovies()}, [])

    return(
        <View>
            <Text>API Demo</Text>
            
            <FlatList
                data={data.slice(0,3)}   // change the slice
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Movie
                        title={item.title}
                        releaseYear={item.releaseYear}   // pass in the item.id to the Movie component as a prop
                        id={item.id}
                    />
                )}
            />

        </View>
    );
}

export default APIdemo;