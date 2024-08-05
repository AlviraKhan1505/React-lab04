import { initializeApp } from 'firebase/app';
import { collection, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARbrPNCq7EeM4h1JLcKjMr9CHbDE2qA0U",
    authDomain: "lab4-f9a2b.firebaseapp.com",
    projectId: "lab4-f9a2b",
    storageBucket: "lab4-f9a2b.appspot.com",
    messagingSenderId: "334173809067",
    appId: "1:334173809067:web:8475b30ee04156382ccaee"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksCollection = collection(db, 'books');
                const booksSnapshot = await getDocs(booksCollection);
                const booksData = booksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBooks(booksData);
            } catch (e) {
                console.error('Error fetching books: ', e);
            }
        };

        fetchBooks();
    }, []);

    const borrowBook = async (book) => {
        if (borrowedBooks.length >= 3) {
            alert('You cannot borrow more than 3 books at a time.');
            return;
        }
        try {
            const bookRef = doc(db, 'books', book.id);
            await updateDoc(bookRef, { borrowed: true });
            setBorrowedBooks([...borrowedBooks, book]);
        } catch (e) {
            console.error('Error borrowing book: ', e);
        }
    };

    const returnBook = async (bookId) => {
        try {
            const bookRef = doc(db, 'books', bookId);
            await updateDoc(bookRef, { borrowed: false });
            setBorrowedBooks(borrowedBooks.filter(book => book.id !== bookId));
        } catch (e) {
            console.error('Error returning book: ', e);
        }
    };

    return (
        <BooksContext.Provider value={{ books, borrowedBooks, borrowBook, returnBook }}>
            {children}
        </BooksContext.Provider>
    );
};
