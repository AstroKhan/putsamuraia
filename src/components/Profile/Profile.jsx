import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';

const Profile = (props) => {


    return (
<div> {/* className={s.profile} */}
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    <MypostsContainer />
    </div>
    )
}

export default Profile;