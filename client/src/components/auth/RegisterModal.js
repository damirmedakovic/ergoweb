
import React, {Component} from 'react';
import { NavLink, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';

class RegisterModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null

    }

    static propTypes = {
        isAuthenticated: PropTypes.bool, 
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal 
        });
    }

    onChange = (e) => {

        this.setState({[e.target.name]: e.target.value});
       
    }

    onSubmit = e => {

        e.preventDefault();

        this.toggle();
    }

    render() {
        return(

            <div>
            <NavLink onClick={this.toggle} href="#">
                Register
            </NavLink>
            

            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                    Register
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="item">
                            Name
                            </Label>
                            <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="mb-3"
                            onChange={this.onChange}/>
                            <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add case item"
                            onChange={this.onChange}/>
                            <Label for="item">
                            Email
                            </Label>
                            <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="mb-3"
                            onChange={this.onChange}/>
                            <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add case item"
                            onChange={this.onChange}/>
                            <Label for="item">
                            Password
                            </Label>
                            <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="mb-3"
                            onChange={this.onChange}/>
                            <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add case item"
                            onChange={this.onChange}/>
                            <Button
                            color="dark"
                            style={{marginTop: '2rem'}}
                            block>
                                Register
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>

        );
    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {register})(RegisterModal);

