import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';

const Profile = () => {

    return (
<div className={s.profile}>
    <ProfileInfo />
    <MypostsContainer />
    </div>
    )
}

export default Profile;