import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import BookItem from '../components/BookItem';
import { BooksContext } from '../context/BooksContext';

const BooksList = ({ navigation }) => {
    const { books } = useContext(BooksContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <BookItem
                        book={item}
                        onPress={() => navigation.navigate('BookDetail', { book: item })}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
});

export default BooksList;