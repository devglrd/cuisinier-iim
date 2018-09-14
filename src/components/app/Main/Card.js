import React, { Component } from 'react';
import moment from "moment"
const Card = (props) => (
    <div className="company-data">
        <div className="overview d-flex" style={{background: "#FFFFFF"}}>
            {/*<div className="image">*/}
            {/*<img src="https://logo.clearbit.com/airbnb.com"/>*/}
            {/*</div>*/}
            <div className="name ml-0">
                <div className="fz-14 fw-4 text-black text-medium">{props.cuisinier.name}</div>
                {/*<span className="text-medium fz-15 flex-column">{props.cuisinier.denomination}</span>*/}
                {/*<span className="type badge badge-primary text-white fz-19 ml-2">{props.cuisinier.codeCIS}</span>*/}
            </div>
            {/*<a href="#" className="cerebro-report" data-toggle="tooltip" data-placement="top"*/}
            {/*title="Tooltip on top">*/}
            {/*<i className="cerebro-icon-report"><img src={flag} alt=""/></i>*/}
            {/*</a>*/}
        </div>
        <div className="summary mt-3">
            <ul className="d-flex">
                <li>
                    <div className="fz-13 fw-6">Email</div>
                    <div className="fz-14 fw-4 text-medium">{props.cuisinier.email}</div>
                </li>
                <li>
                    <div className="fz-13 fw-6">Adresse</div>
                    <div className="fz-14 fw-4 text-medium">{props.cuisinier.adresse}</div>
                </li>
                <li>
                    <div className="fz-13 fw-6">Notes</div>
                    <div className="fz-14 fw-4 text-medium">{props.cuisinier.notes}/5</div>
                </li>
                <li>
                    <div className="fz-13 fw-6">Tarif</div>
                    <div className="fz-14 fw-4 text-medium">{props.cuisinier.tarif} €/jours</div>
                </li>
                <li>
                    <div className="fz-13 fw-6">Compte crée le </div>
                    <div className="fz-14 fw-4 text-medium">{moment(props.cuisinier.created_at).format("d/M/Y")}</div>
                </li>
                <li>
                    <div className="fz-13 fw-6">Recette preférée</div>
                    <div className="fz-14 fw-4 text-medium">{props.cuisinier.preferes_recette}</div>
                </li>
            </ul>
        </div>
        <div className="expand-datas cursor"><a className="expand">Afficher les données complètes du cuisnier</a></div>
        <div className="expand-datas cursor"><a className="expand">Prendre contact</a></div>
    </div>
)

export default Card;