import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [ books, setBooks ] = useState([
		{ title: 'yolo', author: 'shreyas', id: 1 },
		{ title: 'gg', author: 'sudhanva', id: 2 }
	]);

	const addBook = (title, author) => {
		setBooks([ ...books, { title: title, author: author, id: uuid() } ]);
	};

	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	return <BookContext.Provider value={{ books, addbook, revmoeBook }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
