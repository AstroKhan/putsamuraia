import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profile-reducer';
import * as axios from "axios";
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = 2;
    }
    this.props.getUserProfile(userId);
}

render() {
    return (
<Profile {...this.props} profile={this.props.profile} />
    )
}
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainterComponen = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainterComponen);