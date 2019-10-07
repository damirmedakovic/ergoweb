import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Table } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/caseActions';
import PropTypes from 'prop-types';


class CaseList extends Component {

	componentDidMount() {
		this.props.getItems();
	}

	static propTypes = {
		getItems: PropTypes.func.isRequired,
		case: PropTypes.object.isRequired,
		isAuthenticated: PropTypes.bool
	}

	onDeleteClick = (id) => {
 
		this.props.deleteItem(id);

	}

	render() {
		const { items } = this.props.case;
		return (

			<Table borderless>
			<thead>
			  <tr>
				<th></th>
				<th>Gerica #</th>
				<th>Prioritet</th>
				<th>Kategori</th>
				<th>Bydel</th>
				<th>Påbegynt</th>
				<th>Terapeut</th>
				<th>Status</th>
			  </tr>
			</thead>
			<tbody>
				{items.map(({_id, name}) => (
			  <tr>
				<th scope="row">
				{this.props.isAuthenticated ? <Button 
				className="remove-btn" 
				color="danger" 
				size="sm" 
				onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button> : ''}
				</th>
				<td>{name}</td>
				<td>dummy</td>
				<td>@mdo</td>
				<td>d</td>
				<td>a</td>
				<td>m</td>
				<td>i</td>
			  </tr>
			  ))}
			</tbody>
		  </Table>

			);
	}

}



const mapStateToProps = (state) => ({

	case: state.case,
	isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, {getItems, deleteItem})(CaseList);


/*


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

*/