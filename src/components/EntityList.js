
import React from 'react';
import _ from 'lodash';
import {Container,Row,Col} from 'reactstrap';
import Entity from './Entity';

const EntityList = () => {
    let entities = [
        {name:"People",info:"3,000",text:"This is some random text"},
        {name:"Topics",info:"3,000",text:"This is some random text"},
        {name:"Places",info:"3,000",text:"This is some random text"},
        {name:"Organizations",info:"3,000",text:"This is some random text"},
        {name:"Domains",info:"3,000",text:"This is some random text"},
        {name:"Super categories",info:"3,000",text:"This is some random text"}

    ]
    return (
        <Container>
            <Row>
                {_.chunk(entities,5)[0].map((e) =>
                <Col>
                    <Entity entity={e}/>
                </Col>
                )}
            </Row>
            <Row>
                {_.chunk(entities,5)[1].map((e) =>
                <Col>
                    <Entity entity={e}/>
                </Col>
                )}
            </Row>
        </Container>
    );
};
export default EntityList;