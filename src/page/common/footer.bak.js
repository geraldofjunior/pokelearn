import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="inner-container">
                <div className="coluna">
                    <h4>Categoria do movimento:</h4>
                    <ul>
                        <li><a href="/page/list/physical">Ataque físico</a></li>
                        <li><a href="/page/list/special">Ataque especial</a></li>
                        <li><a href="/page/list/status">Status</a></li>
                        <li><a href="/page/list/support">Suporte</a></li>
                    </ul>
                </div>
                <div className="coluna">
                    <h4>Por região da TM:</h4>
                    <ul>
                        <li><a href="/page/list/kanto">Kanto (em breve!)</a></li>
                        <li><a href="/page/list/johto">Johto (em breve!)</a></li>
                        <li><a href="/page/list/hoenn">Hoenn (em breve!)</a></li>
                        <li><a href="/page/list/sinnoh">Sinnoh (em breve!)</a></li>
                        <li><a href="/page/list/unova">Unova (em breve!)</a></li>
                        <li><a href="/page/list/kalos">Kalos (em breve!)</a></li>
                        <li><a href="/page/list/alola">Alola</a></li>
                        <li><a href="/page/list/galar">Galar (em breve!)</a></li>
                    </ul>
                </div>
                <div className="coluna">
                    <h4>Tipo do movimento:</h4>
                    <ul>
                        <li><a href="/page/list/water">Água</a></li>
                        <li><a href="/page/list/dragon">Dragão</a></li>
                        <li><a href="/page/list/electric">Elétrico</a></li>
                        <li><a href="/page/list/fairy">Fada</a></li>
                        <li><a href="/page/list/ghost">Fantasma</a></li>
                        <li><a href="/page/list/fire">Fogo</a></li>
                        <li><a href="/page/list/ice">Gelo</a></li>
                        <li><a href="/page/list/grass">Grama</a></li>
                        <li><a href="/page/list/bug">Inseto</a></li>
                    </ul>
                </div>
                <div className="coluna">
                    <h4>Tipo do movimento:</h4>
                    <ul>                        
                        <li><a href="/page/list/fight">Lutador</a></li>
                        <li><a href="/page/list/steel">Metal</a></li>
                        <li><a href="/page/list/dark">Noturno</a></li>
                        <li><a href="/page/list/normal">Normal</a></li>
                        <li><a href="/page/list/psychic">Psíquico</a></li>
                        <li><a href="/page/list/rock">Rocha</a></li>
                        <li><a href="/page/list/ground">Solo</a></li>
                        <li><a href="/page/list/poison">Venenoso</a></li>
                        <li><a href="/page/list/flying">Voador</a></li>
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