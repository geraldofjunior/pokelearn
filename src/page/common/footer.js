import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="inner-container">
                <div className="coluna">
                    <h4>Categoria do movimento:</h4>
                    <ul>
                        <li>Ataque físico</li>
                        <li>Ataque especial</li>
                        <li>Status</li>
                        <li>Suporte</li>
                    </ul>
                </div>
                <div className="coluna">
                    <h4>Por região da TM:</h4>
                    <ul>
                        <li>Kanto (em breve!)</li>
                        <li>Johto (em breve!)</li>
                        <li>Hoenn (em breve!)</li>
                        <li>Sinnoh (em breve!)</li>
                        <li>Unova (em breve!)</li>
                        <li>Kalos (em breve!)</li>
                        <li>Alola</li>
                        <li>Galar (em breve!)</li>
                    </ul>
                </div>
                <div className="coluna">
                    <h4>Tipo do movimento:</h4>
                    <ul>
                        <li>Água</li>
                        <li>Dragão</li>
                        <li>Elétrico</li>
                        <li>Fada</li>
                        <li>Fantasma</li>
                        <li>Fogo</li>
                        <li>Gelo</li>
                        <li>Grama</li>
                        <li>Inseto</li>
                    </ul>
                </div>
                <div className="coluna">
                    <h4>Tipo do movimento:</h4>
                    <ul>                        
                        <li>Lutador</li>
                        <li>Metal</li>
                        <li>Noturno</li>
                        <li>Normal</li>
                        <li>Psíquico</li>
                        <li>Rocha</li>
                        <li>Solo</li>
                        <li>Venenoso</li>
                        <li>Voador</li>
                    </ul>
                </div>
            </div>
            <div id="linha-de-baixo">
                Protótipo feito com fins educativos por <strong>Geraldo de Figueiredo Júnior</strong>.<br />
                <strong>E-mail</strong>: <a href="mailto:geraldofjunior@gmail.com">geraldofjunior@gmail.com</a><br />
                <strong>Telefone</strong>: (61) 98183-9384
            </div>
        </footer>
    );
};

export default Footer;