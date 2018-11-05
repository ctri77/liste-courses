import React from 'react';
import { connect } from 'react-redux';
import { ajout, recupArticle, recupQte, recupRayon } from '../Actions';
import { bindActionCreators } from 'redux';
import { Row, Col, Form, Input } from 'reactstrap';
import Bouton from '../Components/Bouton';
import './InputAjout.css';

const InputAjout = ({ajout, recupArticle, recupQte, recupRayon, article, qte, rayon}) => (
    
        <Form>
            <Row className="ligne">
                <Col xs="12" sm="2" className="zoneQte">
                    <Input bsSize="lg" placeholder="Quantité" type="number" name="qte" step="1" value={qte} onChange={(e) => recupQte(e.target.value)} required />
                </Col>
                
                <Col xs="12" sm="5" className="zoneSaisie">
                    <Input bsSize="lg" type="text" placeholder="Entrez un article" value={article} onChange={(e) => recupArticle(e.target.value)} required />
                </Col>
                <Col xs="12" sm="3" className="rayon">
                    <Input bsSize="lg" type="select" name="select" value={rayon} onChange={(e) => recupRayon(e.target.value)}>
                        <option defaultValue hidden>
                            Rayon
                        </option>
                        <option value="Fruits et légumes">
                            Fruits et légumes
                        </option>
                        <option value="Surgelés">
                            Surgelés
                        </option>
                        <option value="Epicerie">
                            Epicerie
                        </option>
                        <option value="Boissons">
                            Boissons
                        </option>
                        <option value="Crèmerie">
                            Crèmerie
                        </option>
                        <option value="Boulangerie">
                            Boulangerie
                        </option>

                        <option value="Entretien">
                            Entretien
                        </option>
                        <option value="Autres">
                            Autres
                        </option>

                    </Input>
                </Col>
                <Col xs="12" sm="1">
                    <Bouton onClickBtn={(e) => {
                            e.preventDefault();
                            ajout();
                            }} name="Ajouter" />                   
                    
                </Col>

            </Row>
        </Form>

)
function mstp(state) {
    return {
        article: state.ajout.article,
        qte: state.ajout.qte,
        rayon: state.ajout.rayon,
    }
}
function mdtp(dispatch) {
    return bindActionCreators({ajout, recupArticle, recupQte, recupRayon}, dispatch);
}

export default connect(mstp, mdtp)(InputAjout);