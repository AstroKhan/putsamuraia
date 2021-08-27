import s from './Post.module.css';

const Post = (props) => {

    return ( 
      <div className={s.item}>
      <img src="https://astrokhan.ru/images/profile.jpg"/>
        {props.message};
        <div>
          <span>Like!</span> {props.likesCount}
        </div>
      </div>
    )}

    export default Post;