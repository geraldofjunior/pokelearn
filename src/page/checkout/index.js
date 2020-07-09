import React, {Component} from 'react';
import tm from '../../utils/data';
import './style.css';
import '../../styles/index.css';
import '../list/style.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            itemsPerPage: 15,
            cartItems: [],
            cartPrice: 0
        };
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
        this.handleAddToCartClick  = this.handleAddToCartClick.bind(this);
        this.handleRemoveFromCartClick = this.handleRemoveFromCartClick.bind(this);
        this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    }

    handlePaginationClick(event) {
        document.getElementById(this.state.currentPage).className = "";
        this.setState({ currentPage: event.target.id });
        event.target.className = "current";
    }

    handleAddToCartClick(event) {
        let itemIndex = event.target.value;
        if (!isNaN(itemIndex)) {
            const newItem = tm[itemIndex];
            let totalPrice = this.state.cartPrice + (newItem.price - 0.01);
            let stateArr = [];
            if (Array.isArray(this.state.cartItems)) {
                stateArr = this.state.cartItems;
            }
            stateArr.push(newItem);
            this.setState({
                cartItems: stateArr,
                cartPrice: totalPrice
            });
        }

    }

    handleRemoveFromCartClick(event) {
        let itemIndex = event.target.value;
        if (!isNaN(itemIndex)) {
            let stateArr = [];
            let totalValue = this.state.cartPrice;
            if (Array.isArray(this.state.cartItems)) {
                stateArr = this.state.cartItems;
                totalValue = totalValue - stateArr[itemIndex].price;
                stateArr.splice(itemIndex, 1);
            } else {
                return(null);
            }
            this.setState({
                cartItems: stateArr,
                cartPrice: totalValue
            });
        }
    }

    handleCheckoutClick(event) {
        alert("Obrigado pela compra. Volte sempre.");
        this.setState({
            cartItems: [],
            cartPrice: 0
        })
    }

    render() {
        const { currentPage, itemsPerPage } = this.state;

        // Lógica para mostrar os itens da página

        const pageStart = (currentPage - 1) * itemsPerPage;
        const pageEnd = currentPage * itemsPerPage >= tm.length ? tm.length : currentPage * itemsPerPage;
        const item = tm.slice(pageStart, pageEnd);
        const renderItems = item.map((currentTm, index) => {
            return (
                <div className="item">
                    <h3>{currentTm.tm_name} - {currentTm.move_name}</h3><br />
                    Por: <span className="price-to">R$ {currentTm.price-0.01}</span>
                    <br /><br />
                    <button className="add-cart" value={((this.state.currentPage - 1) * 15) + index} onClick={this.handleAddToCartClick}>Por no carrinho</button>
                </div>
            )
        });

        // Lógica para mostrar as páginas

        const pages = [];
        // Por algum motivo bizarro, o VSCode enche o saco se usar o operador menor ou igual ( <= ) 
        for (let count = 1; count <= Math.ceil(tm.length / itemsPerPage); count++) {
            pages.push(count);
        }
        const currentClass = "current", notCurrent = "";
        const renderPageNumbers = pages.map((number) => {
            return (
                <li
                    className={number === currentPage ? currentClass : notCurrent }
                    key={number}
                    id={number}
                    onClick={this.handlePaginationClick}>
                    {number}</li>
            );
        });
        
        console.log("State: ");
        console.log(this.state.cartItems);

        const cartItems = Array.isArray(this.state.cartItems) ? this.state.cartItems : [];

        console.log("Objeto em render():");
        console.log(cartItems);
        

        const renderCartItems = cartItems.map((current, index) => {
            return (
                <tr className="cart-item">
                    <td className="cart-item-name">{current.tm_name} - {current.move_name}</td>
                    <td className="cart-item-price" align="left">R$ {current.price - 0.01}</td>
                    <td><button className="remove-item" value={index} onClick={this.handleRemoveFromCartClick}>X</button></td>
                </tr>
            )
        });

        // Mostra tudo

        return (
            <div className="container">
                <div className="inner-container">
                    {renderItems}
                </div>
                <div className="inner-container">
                    <ul className="pagination">{renderPageNumbers}</ul>
                </div>
                <div className="side-cart">
                    <div className="cart-header">Carrinho de compras</div>
                    <table className="cart-item-list">
                      <tbody>
                        {renderCartItems}
                        <tr className="total-price">
                            <td className="cart-item-name total-price">Total:</td>
                            <td className="cart-item-price total-price">R$ {this.state.cartPrice.toPrecision(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="checkout" onClick={this.handleCheckoutClick}>Finalizar compras</button>    
                </div>
            </div>
        );
    }

}

export default List;