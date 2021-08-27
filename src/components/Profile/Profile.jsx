import s from './Profile.module.css';
import Myposts from './Myposts/Myposts.jsx';

const Profile = () => {
    return (
<div className={s.profile}>
    <div>
    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"/>
    </div>
    <div>
      ava + description
    </div>
    <Myposts />
    </div>
    )
}

export default Profile;