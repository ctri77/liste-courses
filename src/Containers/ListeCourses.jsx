import React from 'react';
import { connect } from 'react-redux';
import Bouton from '../Components/Bouton';
import { bindActionCreators } from 'redux';
import { supp, check, vider } from '../Actions';
import { Row, Col, Input } from 'reactstrap';
import './ListeCourses.css';


const ListeCourses = ({liste, supp, check, vider}) => {
    let tempRayon = "";
    let tempRayonBis = "";
    let imgRayon = "";
    let tempClsRayon = "";
    return (
    <div className="blocListe">
        <p className="titre">Liste des courses</p>  
                {liste.map((item, index) => {  
                    if (tempRayon === "") {
                        if (tempRayonBis !== item.rayon) {
                            tempRayon = item.rayon;
                            tempRayonBis = item.rayon;
                        } 
                    } else {
                        if (tempRayonBis === item.rayon) {
                            tempRayon = "";
                        } else {
                            tempRayon = item.rayon;
                            tempRayonBis = item.rayon;
                        }
                    }
                    switch(tempRayon) {
                        case 'Fruits et légumes':
                            imgRayon = "https://i.postimg.cc/zDHKqw6R/healthy-food.png";
                            break;
                        case 'Surgelés':
                            imgRayon = "https://i.postimg.cc/Nf1XHsgs/meat.png";
                            break;
                        case 'Epicerie':
                            imgRayon = "https://i.postimg.cc/FRMfYq8k/icons8-bo-te-de-conserve-48.png";
                            break;
                        case 'Boissons':
                            imgRayon = "https://i.postimg.cc/g00LQ33j/juice-2.png";
                            break;
                        case 'Crèmerie':
                            imgRayon = "https://i.postimg.cc/rFCdpfJz/milk-bottle.png";
                            break;
                        case 'Boulangerie':
                            imgRayon = "https://i.postimg.cc/pd15HyBZ/bread.png";
                            break;
                        case 'Entretien':
                            imgRayon = "https://i.postimg.cc/1tnn5PCZ/cleaning-service.png";
                            break;
                        case 'Autres':
                            imgRayon = "https://i.postimg.cc/Qd8FKc4m/icons8-point-d-interrogation-48.png";
                            break;
                        default:
                            imgRayon = "";    
                    }
                    tempRayon === "" ? tempClsRayon = "cache" : tempClsRayon = "clsRayon";
                    return(
                    <div className="listeRayon" key={index}>
                        <p className={tempClsRayon}>{tempRayon}<img className="imgRayon" src={imgRayon} alt={tempRayon}/></p>
                        <div key={item.index + item.article} className="listeArticles">                       
                                <Row className={item.checked === true ? 'liste raye' : 'liste'} key={index}>
                                    <Col xs="3">
                                        <Input type="checkbox" onClick={() => {                                       
                                        check(index);
                                        }}    
                                        />
                                    </Col>
                                    <Col xs="6">
                                        <p className="titreArticle">{item.qte} {item.article}</p>
                                    </Col>
                                    <Col xs="3">
                                        <Bouton name="Supprimer" onClickBtn={(e) => {
                                        e.preventDefault();
                                        supp(index);
                                        }} />
                                    </Col>                        
                                </Row>
                        </div>
                    </div>
                    )
                })}
        
      
        <div className="vider">
            <Bouton name="Vider" onClickBtn={(e) => {
                e.preventDefault();
                vider();
                }} />
        </div>

    </div>
    )
        };

      

function mstp(state) {

    return {
        liste: state.ajout.liste
    }
}

function mdtp(dispatch) {
    return bindActionCreators({supp, check, vider}, dispatch);
}

export default connect(mstp, mdtp)(ListeCourses);