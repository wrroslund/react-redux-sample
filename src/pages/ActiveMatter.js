import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Grid,Row} from 'react-bootstrap';
import {Container,Row,Col} from 'reactstrap';
import Matter from '../components/Matter';
import {fetchMatter} from '../actions';
import PropTypes from 'prop-types';
import _ from 'lodash';

class ActiveMatter extends Component {
    componentDidMount() {
        const{matterid,getMatter} = this.props;
        getMatter(matterid);
    }
    componentDidUpdate(prevProps) {
        const {matterid,getMatter} = this.props;
        if (!_.isEqual(prevProps.matterid, matterid))
            getMatter(matterid);
    }
    render() {
        const{matter,isFetching} = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        {!isFetching && matter && <Matter matter={matter} isFetching={isFetching}/>}
                        {isFetching && <div>...</div>}
                    </Col>
                </Row>
            </Container>
            
        );
    }
}
ActiveMatter.propTypes={
    getMatter:PropTypes.func.isRequired,
    matter: PropTypes.object.isRequired,
    matterid:PropTypes.number,
    isFetching:PropTypes.bool.isRequired
};

const mapStateToProps = (state,ownProps) => {
    let matterid = _.toNumber(ownProps.match.params.matterid);
    let matter = state.matters.current && state.matters.current.id==matterid?state.matters.current:{};
    return {
        matterid,
        matter,
        isFetching: state.matters.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMatter: (matterid) => {dispatch(fetchMatter(matterid));}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveMatter);

