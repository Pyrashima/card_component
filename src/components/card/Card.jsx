import React from 'react'
import "./Card.css";
import Image from '../image/Image';
import CardTitle from '../card-title/CardTitle';
import CardBody from '../card-body/CardBody';
import CardFooter from '../card-footer/CardFooter';
import CardInformation from '../card-information/CardInformation';

const Card = () => {
    return (
        <article className="card">
            <Image />
            <CardTitle />
            <CardBody />
            <CardInformation />
            <CardFooter />
        </article>
    );
}

export default Card;