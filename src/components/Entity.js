
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Entity = ({entity}) => {
    
    return (
        <div>
            <Card>
                <CardBody>
                <CardTitle>{entity.name}</CardTitle>
                <CardSubtitle>{entity.info}</CardSubtitle>
                <CardText>{entity.text}</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Entity;