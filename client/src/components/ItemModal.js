import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
/*import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input

} from 'reactstrap';*/
import { connect } from 'react-redux';
import { addItem } from '../actions/caseActions';
import uuid from 'uuid';


class ItemModal extends Component {
    state = {
        modal: false,
        name: ''

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

        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem);
        this.toggle();
    }

    render() {
        return(

            <div>
                <Button
                color="dark"
                style={{marginBottom:"2rem"}}
                onClick={this.toggle}>Opprett ny</Button>
            <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                    Fyll ut skjemaet for å legge til en ny sak
                </ModalHeader>
                <ModalBody>

            <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                    type="text"
                    name="name"
                    id="item"
                    placeholder="Add case item"
                    onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Prioritet</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Beskrivelse</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Kategori</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Hjemmetjeneste
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Hørsel og syn
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Annet
                </Label>
              </FormGroup>
            </FormGroup>
            <Button
                color="dark"
                style={{marginTop: '2rem'}}
                block>Legg inn i systemet</Button>
          </Form>
          </ModalBody>
          </Modal>
          </div>

          

        );
    }

}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(ItemModal);


/*

<div>
                <Button
                color="dark"
                style={{marginBottom:"2rem"}}
                onClick={this.toggle}>Add Item</Button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Fyll ut skjemaet for å legge til en ny sak
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">
                                Case
                                </Label>
                                <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add case item"
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
                                    Legg inn i systemet
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>

            */