import React from 'react';
import './Bouton.css';

const Bouton = (props) => {
    let clsBtn = props.name === 'Supprimer' ? 'boutonSupp' : props.name === 'Ajouter' ? 'boutonAjout' : 'boutonVider';
    return (
        <button onClick={props.onClickBtn} className={clsBtn} width={props.width} heigth={props.heigth}></button>
    );
    
}

export default Bouton;
