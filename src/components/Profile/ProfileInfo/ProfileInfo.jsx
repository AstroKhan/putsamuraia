
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
<div>
    <div>
        <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"/>
    </div>
    <div className={s.descriptionBlog}>
        ava + description
    </div>
</div>
    )
}

export default ProfileInfo;