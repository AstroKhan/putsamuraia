import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';

const Profile = (props) => {

    return (
<div> {/* className={s.profile} */}
    <ProfileInfo profile={props.profile} />
    <MypostsContainer />
    </div>
    )
}

export default Profile;