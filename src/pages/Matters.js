import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Grid,Row} from 'react-bootstrap';
import {Container,Row,Col} from 'reactstrap';
import MatterList from '../components/MatterList';
import {fetchMatters} from '../actions';
import PropTypes from 'prop-types';

class Matters extends Component {
    componentDidMount() {
        const{getMatters} = this.props;
        getMatters();
    }
    render() {
        const{matters} = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <MatterList matters={matters}/>
                    </Col>
                </Row>
            </Container>
            
        );
    }
}
Matters.propTypes={
    getMatters:PropTypes.func.isRequired,
    matters: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        matters: state.matters.all,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMatters: () => {dispatch(fetchMatters());}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Matters);

