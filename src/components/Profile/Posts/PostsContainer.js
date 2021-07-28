import { connect } from 'react-redux';
import { newPostActionCreator, updateNewPostTextActionCreater } from '../../../redux/profile-reducer'
import Posts from './Posts'

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(newPostActionCreator());
    },
    updateNewPostText: (newPostText) => {
      dispatch(updateNewPostTextActionCreater(newPostText));
    }
  }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;