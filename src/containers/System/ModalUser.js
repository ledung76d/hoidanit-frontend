import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '1',
            roleId: '0'
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleOnchangeInput = (event, id) => {
        //bad code
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check  bad state:', this.state)
        // })
        //good code
        let copyState = {
            ...this.state
        }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber', 'gender', 'roleId']
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop: ', this.state[arrInput[i]], arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === true) {
            //call api create user
            this.props.createNewUser(this.state)
            console.log('data model:', this.state)

        }
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className={'modal-user-container '}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => { this.toggle() }}>Create new user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email:</label>
                                <input
                                    type='email'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'email') }}
                                    value={this.state.email}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Password:</label>
                                <input
                                    type='password'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'password') }}
                                    value={this.state.password}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Firstname:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'firstName') }}
                                    value={this.state.firstName}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Lastname:</label>
                                <input type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'lastName') }}
                                    value={this.state.lastName}
                                ></input>
                            </div>
                            <div className='input-container '>
                                <label>Address:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'address') }}
                                    value={this.state.address}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Phone:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'phoneNumber') }}
                                    value={this.state.phoneNumber}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Gender:</label>
                                <select
                                    name="gender"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'gender') }}
                                    value={this.state.gender}
                                >
                                    <option value="1">Nam</option>
                                    <option value="0">Nữ</option>
                                </select>
                            </div>
                            <div className='input-container'>
                                <label>Role:</label>
                                <select
                                    name="roleId"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'roleId') }}
                                    value={this.state.roleId}
                                >
                                    <option value="0">User</option>
                                    <option value="1">Admin</option>
                                </select>
                            </div>

                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleAddNewUser() }}>
                            Add user
                        </Button>{' '}
                        <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);





