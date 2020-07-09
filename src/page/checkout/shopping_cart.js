import React, { Component } from 'react';

class ShoppingCart extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            itemCount: 0,
            totalPrice: 0,
            discount: 0.8
        }

        // Para testar

        const teste = require('../../data/tm_alola.json');
        this.addToCart(teste.move[37], 2);
        this.addToCart(teste.move[54], 3);
        this.addToCart(teste.move[69], 1);
    }

    addToCart(item, quantity) {
        const discount = this.state.discount;
        if (quantity > 0 && item) {
            const position = this.searchItemOnCart(item);
            let itemsOnCart = this.state.items;
            let countItemsOnCart = this.state.itemCount;
            let subTotal = this.state.price;
            if (position < 0) {
                itemsOnCart.push({ "item": item, "quantity": quantity });               
            } else {
                itemsOnCart[position].quantity += quantity;
            }
            countItemsOnCart += quantity;
            subTotal += (item.price * discount).toPrecision(2) - 0.01 * quantity;
            this.setState({
                items: itemsOnCart,
                itemCount: countItemsOnCart,
                totalPrice: subTotal
            });
        }
    }

    removeFromCart(cartIndex) {
        let subtotal = this.state.totalPrice;
        let itemCount = this.state.quantity;
        let itemList = this.state.items;

        subtotal -= itemList[cartIndex].item.price * itemList[cartIndex].item.quantity;
        itemCount -= itemList[cartIndex].item.quantity;
        itemList.splice(cartIndex,1);

        this.setState ({
            items: itemList,
            quantity: itemCount,
            totalPrice: subtotal
        })
    }

    searchItemOnCart(item) {
        let position = -1;
        if (this.state.itemCount > 0) {
            let items = this.state.items;
            
            for (let i = 0; i < items.length; i++) {
                if (items.item.tm_name === item.tm_name) {
                    position = i;
                }
            }
        }
        return (position);
    }

    resetCart() {
        this.setState({
            items: [],
            itemCount: 0,
            totalPrice: 0
        });
    }

    static getCart() {
        return ({
            items: this.state.items,
            itemCount: this.state.itemCount,
            totalPrice: this.state.totalPrice,
            discount: this.state.discount
        });
    }

    handleRemoveItemClick(target) {
        const index = target.value;
        this.removeFromCart(index);
    }

    render() {
        const cartItems = this.state.items;
        const cartItemCount = this.state.quantity;
        const cartTotal = this.state.totalPrice;
        const discount = this.state.discount;

        const renderItems = cartItems.map((current, index) => {
            return (
                <tr className="cart-item">
                    <td className="cart-item-name">{current.item.tm_name} - {current.item.move_name}</td>
                    <td className="cart-item-quantity">{current.quantity}</td>
                    <td className="cart-item-price">{current.quantity * ((current.item.price * discount).toPrecision(2) - 0.01)}</td>
                    <button className="remove-item" value={index}>X</button>
                </tr>
            )
        });

        return (
            <div className="shopping-cart">
                <div className="cart-header">Carrinho de compras</div>
                <table className="cart-item-list">
                    {renderItems}
                    <tr className="total-price">
                        <td className="cart-item-name total-price">Total: </td>
                        <td className="cart-item-quantity total-price">{cartItemCount}</td>
                        <td className="cart-item-price total-price">{cartTotal}</td>
                    </tr>
                </table>
                <button className="checkout">Finalizar compras</button>    
            </div>
        );
    }
}

export default ShoppingCart;