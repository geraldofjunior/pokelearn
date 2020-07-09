import React, { Component } from 'react';
import api from '../../utils/api';

class Home extends Component {

  state = {
    TMs: [],
  }

  async componentDidMount() {
    const movimentos = require('../../data/alola.json');
    let lista = [], tmp, lista2 = [];
    const total_movimentos = movimentos.tm.length;

    let movimento, cont_str;
 
    for (let cont = 0; cont < total_movimentos; cont++) {
        tmp = await api.get(`move/${movimentos.tm[cont]}`);

        cont_str = cont + 1;

        movimento = {
          move_name: tmp.data.names[7].name,
          tm_name: cont < 10 ? "TM 0"+cont_str : "TM "+cont_str,
          region: "alola",
          power: tmp.data.power ? tmp.data.power : 0,
          pp: tmp.data.pp,
          accuracy: tmp.data.accuracy ? tmp.data.accuracy : 100,
          target: tmp.data.target,
          type: tmp.data.type.name,
          damage_class: tmp.data.damage_class.name,
          effect: tmp.data.meta.category.name,
          description: tmp.data.flavor_text_entries[1].language.name === "en" ? 
                          tmp.data.flavor_text_entries[1].flavor_text : 
                          this.procurarIngles(tmp.data)
        }

        lista.push(tmp.data);
        lista2.push(movimento);
    }
    
    console.log(lista2);

    this.setState({ TMs: lista });
  }

  procurarIngles(move) {
    let achou = false, cont = 0;
    do {
      if (move.flavor_text_entries[cont].language.name === 'en') {
        achou = true;
      } else {
        cont++;
      }
    } while(!achou && move.flavor_text_entries[cont]);
    return (move.flavor_text_entries[cont].flavor_text);
  }

  render() {

    const { TMs } = this.state;

    let cont = 1;

    return (
      <div>
        <h1>Listar as TMs</h1>
        {TMs.map(tm => (
          <li key={tm.id}>
            <h2>
              <strong>TM{cont++}: </strong> {tm.names[7].name}
            </h2>
            <p>
              <strong>Tipo:</strong> {tm.type.name}<br />
              <strong>PP:</strong> {tm.pp}<br />
              <strong>Descrição:</strong> {tm.flavor_text_entries[1].flavor_text}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default Home;