import React, { Component } from 'react';
import './BookList.css';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';
import WithBookStoreService from '../Hoc';
import { booksLoaded } from '../../actions';
import { bindActionCreators } from 'redux';
import compose from '../../utils';


class BookList extends Component {
    componentDidMount() {
        const { bookStoreService } = this.props;
        const data = bookStoreService.getBooks();
        
        this.props.booksLoaded(data);
    }
    
    render() {
        const { books } = this.props;
        
        return (
            <ul className="book-list">
                {books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book} /></li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ booksLoaded }, dispatch);
}


export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);