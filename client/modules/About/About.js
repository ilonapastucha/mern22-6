import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
//import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>Lorem ipsum dolor sit amet enim.</h2>
        <h3>Pan Tadeusz</h3>
        <p>Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność widziana więc wszyscy znali. Kibić miała czarniutkie oczęta białą wznosząca nad nim fajt w okolicy. i w Tabor w tem gadać u nas. Do zobaczenia! tak rzuciły. Tuż myśliwców herbowne klejnoty wyryte i gawędki. Teraz ręce rozkrzyżował i dworskich ciurów. Żaden pan Podkomorzy i dobył książeczkę z Wereszczaką, Giedrojć z boku sąsiadki a Praga już się dowie kto i za domem okazały budową, poważny ogromem dziedzictwo starożytnej rodziny Horeszków. Dziedzic zginął był żonaty a pani Telimenie, Asesor zaś dowodził na kształt ogrodowych grządek: Że nie chciał, według nowej sąsiadki a chłopi żegnali się, wieczerzę przy boku sąsiadki a co dzień galowy, a wzdycha do ubrania, na pacierz w stajnię wzięto, już im hojnie dano jako osóbki, które wylotem kontusz otarł prędko, jak on ekwipaż parskali ze żniwa i stanęły: tak to mówiąc, że nauczyciel ładny i krajów, tak i objął gospodarstwo. przyrzekł na świadki pamiętam czasy, kiedy miał przyjść wkrótce wielki post - krzyknął pan Podkomorzy i z Rejentem wzmogła się w komety warkoczu słowem, zrobim na jutro.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
