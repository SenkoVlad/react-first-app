import { renderTrie } from "../render";

let state = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],
        messages: [
            { id: 1, text: 'Hi' },
            { id: 2, text: 'How is your it-kamasutra?' },
            { id: 3, text: 'Yo' },
            { id: 4, text: 'Yo' },
            { id: 5, text: 'Yo' }
        ]
    },
    profilePage: {
        posts: [
            { id: 1, text: "The First post", likes: "5" },
            { id: 2, text: "The second post", likes: "6" },
            { id: 3, text: "The third post", likes: "3" },
            { id: 4, text: "The fourth post", likes: "7" },
        ],
        
    }
}

export let addPost = () => {
    if (state.profilePage.newPostText != '') {
        let newPost = {
            id: 5,
            text: state.profilePage.newPostText,
            likes: 0
        }
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        renderTrie(state);
    }
}

export let updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    window.state = state;
}

export default state
