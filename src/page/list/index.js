import React, {Component} from 'react';
import tm from '../../utils/data';
import './style.css';
import '../../styles/index.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            itemsPerPage: 15
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        document.getElementById(this.state.currentPage).className = "";
        this.setState({ currentPage: event.target.id });
        event.target.className = "current";
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
                    De: <span className="price-from">{currentTm.price-0.01}</span><br />
                    Por: <span className="price-to">{(currentTm.price * 0.8).toPrecision(2) - 0.01}</span>
                    <br /><br />
                    <button className="more-info">Mais info</button>
                    <button className="add-cart">Por no carrinho</button>
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
                    onClick={this.handleClick}>
                    {number}</li>
            );
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
            </div>
        );
    }
}

export default List;