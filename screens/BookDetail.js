import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BooksContext } from '../context/BooksContext';

const BookDetail = ({ route }) => {
  const { book } = route.params;
  const { borrowBook } = useContext(BooksContext);

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: book.cover }} style={styles.cover} /> */}
      <Text style={styles.title}>{book.name}</Text>
      <Text style={styles.author}>by {book.author}</Text>
      <Text style={styles.rating}>Rating: {book.rating}</Text>
      <Text style={styles.summary}>{book.summary}</Text>
      <Button title="Borrow" onPress={() => borrowBook(book)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  cover: {
    width: 150,
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    color: '#777',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 16,
  },
  summary: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default BookDetail;
