import React, { useContext } from 'react';

const BookDetails = ({ book }) => {
	const { removeBook } = useContext(BookDetails);

	return (
		<li>
			<div className="title">{book.title}</div>
			<div className="author">{book.author}</div>
		</li>
	);
};

export default BookDetails;
