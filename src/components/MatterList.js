import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MatterList extends Component {
    render(){
        const {matters} = this.props;
        return (
            <ListGroup>
                {matters.map((m,i)=>(
                    <ListGroupItem key={`matter${i}`}>
                        <Link to={`/matter/${m.id}`}>{m.name}</Link>
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}
MatterList.propTypes={
    matters:PropTypes.array.isRequired
};

export default MatterList;