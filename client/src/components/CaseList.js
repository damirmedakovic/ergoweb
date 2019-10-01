import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/caseActions';
import PropTypes from 'prop-types';


class CaseList extends Component {

	componentDidMount() {
		this.props.getItems();
	}

	onDeleteClick = (id) => {
 
		this.props.deleteItem(id);

	}

	render() {
		const { items } = this.props.case;
		return (
			<Container>
			<ListGroup>
			<TransitionGroup className="case-list">
			{items.map(({ _id, name }) => (
				<CSSTransition key={_id} timeout={500} classNames="fade">
				<ListGroupItem>
				<Button 
				className="remove-btn" 
				color="danger" 
				size="sm" 
				onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
				{name}
				</ListGroupItem>
				</CSSTransition>
			))}
			</TransitionGroup>
			</ListGroup>

			</Container>

			);
	}

}

CaseList.propTypes = {
	getItems: PropTypes.func.isRequired,
	case: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({

	case: state.case
});


export default connect(mapStateToProps, {getItems, deleteItem})(CaseList);