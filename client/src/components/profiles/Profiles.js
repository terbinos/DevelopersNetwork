import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/spinner';
import { getProfiles } from '../../actions/profileActions';
import ProfileItem from './ProfileItem';


class Profiles extends Component {
    componentDidMount(){
        this.props.getProfiles();
    }

    render() {
        const { profiles, loading } = this.props.profile;
        let profileContent;
        
        if(profiles === null || loading ){
            profileContent = <Spinner />;
        }else{
            if(profiles.length > 0){
                profileContent = profiles.map( profile => (
                    <ProfileItem key={profile._id} profile={profile}/>
                ))
            }else{
                profileContent = <h4>No profiles found ...</h4>
            }
        } 
        return (
            <div className="profiles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Developer Profile</h1>
                                <p className="lead text-center">Browse and contact with developers</p> 
                                {profileContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps,{getProfiles})(Profiles); 