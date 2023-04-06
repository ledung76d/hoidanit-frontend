import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        const { isLoggedIn, userInfo } = this.props;
        // let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';
        let linkToRedirect1 = '/home'
        let linkToRedirect2 = '/system/user-manage'
        return (
            <Redirect to={isLoggedIn && userInfo.roleId === 1 ? linkToRedirect2 : linkToRedirect1} />
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
