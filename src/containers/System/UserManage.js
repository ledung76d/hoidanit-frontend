import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers } from '../../services/userService'
class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    /*
    life cycle:
    run component:
    1.run construct => init state
    2 did mount(set State): khi muon gan gia tri cho state
    3.render
    */

    render() {
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <div className='title text-center'>Manage users with admin:</div>
                <div className='mx1'>
                    <button className='btn btn-primary px-3'> <i className='fas fa-plus'></i>  Add new user</button>
                </div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'><i className='fas fa-pencil-alt'></i>Edit</button>
                                        <button className='btn-delete'><i className='fas fa-trash'></i>Delete</button>
                                    </td>
                                </tr>

                            )
                        })

                        }
                    </table>
                </div>
            </div >
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
