import s from './Myposts.module.css';
import Post from './Post/Post.jsx';

const Myposts = () => {
    return ( 
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='Hi, how are you?' likesCount="0"/>
      <Post message="It's my not first post" likesCount="24"/>
    </div>
    )}

    export default Myposts;