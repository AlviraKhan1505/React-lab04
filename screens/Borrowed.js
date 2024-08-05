import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookItem from '../components/BookItem';
import { BooksContext } from '../context/BooksContext';

const Borrowed = () => {
    const { borrowedBooks, returnBook } = useContext(BooksContext);

    const renderBorrowedBook = ({ item }) => (
        <View style={styles.card}>
            <BookItem book={item} onPress={() => { }} />
            <TouchableOpacity style={styles.returnButton} onPress={() => returnBook(item.id)}>
                <Text style={styles.returnButtonText}>Return</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={borrowedBooks}
                keyExtractor={(item) => item.id}
                renderItem={renderBorrowedBook}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => <Text style={styles.emptyText}>No borrowed books</Text>}
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
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        padding: 16,
        marginVertical: 8,
    },
    returnButton: {
        backgroundColor: '#e53935',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginTop: 8,
        alignSelf: 'flex-end',
    },
    returnButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 8,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        marginTop: 20,
    },
});

export default Borrowed;
