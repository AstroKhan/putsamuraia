import s from './Profile.module.css';
import Myposts from './Myposts/Myposts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';

const Profile = (props) => {

    return (
<div className={s.profile}>
    <ProfileInfo />
    <MypostsContainer store={props.store} />
    </div>
    )
}

export default Profile;