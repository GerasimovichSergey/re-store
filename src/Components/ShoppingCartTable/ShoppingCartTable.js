import React from 'react';
import './shoppingCartTable.css';
import { connect } from 'react-redux';
import { allBooksRemovedFromCart, bookAddedToCart, bookRemovedFromCart } from '../../actions';


const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, index) => {
        return (
            <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>${item.total}</td>
                <td>
                    <button onClick={() => onDelete(item.id)}
                            className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa-regular fa-trash-can" />
                    </button>
                    <button onClick={() => onIncrease(item.id)}
                            className="btn btn-outline-success btn-sm float-right">
                        <i className="fa-solid fa-circle-plus" />
                    </button>
                    <button onClick={() => onDecrease(item.id)}
                            className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa-solid fa-circle-minus" />
                    </button>
                </td>
            </tr>
        );
    };
    
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                
                <tbody>
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>
            
            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.cartItems,
        total: state.shoppingCart.orderTotal,
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);