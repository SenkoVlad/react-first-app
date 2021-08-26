import { connect } from 'react-redux';
import { newPostActionCreator } from '../../../redux/profile-reducer'
import Posts from './Posts'

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newposttext) => {
      dispatch(newPostActionCreator(newposttext));
    }
  }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;