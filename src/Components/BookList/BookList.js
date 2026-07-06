import React, { Component } from 'react';
import './BookList.css';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';
import WithBookStoreService from '../Hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import compose from '../../utils';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';


const BookList = (props) => {
    const { books, onAddedToCart } = props;
    
    return (
        <ul className="book-list">
            {books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookListItem
                            book={book}
                            onAddedToCart={() => onAddedToCart(book.id)}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    
    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        
        if (loading) {
            return <Spinner />;
        }
        
        if (error) {
            return <ErrorIndicator />
        }
        
        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookStoreService } = ownProps;
    
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}


export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);