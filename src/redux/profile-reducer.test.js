import profileReducer, {newPostActionCreator} from './profile-reducer';

let initialState = {
    posts: [
        { id: 1, text: "The First post", likes: 5 },
        { id: 2, text: "The second post", likes: 6 },
        { id: 3, text: "The third post", likes: 3 },
        { id: 4, text: "The fourth post", likes: 7 },
    ]
}


describe("profile-reducer tests", () => {
    it("post should be added. Length + 1", () => {
        let action = newPostActionCreator("new post text");
        const prevLength = initialState.posts.length;

        let newState = profileReducer(initialState, action);
        const newLength = newState.posts.length;

        expect(newLength).toBe(prevLength + 1);
    });
    it("post should be added with correct text", () => {
        let action = newPostActionCreator("new post text");
        let newState = profileReducer(initialState, action);

        expect(newState.posts[newState.posts.length -1].text).toBe("new post text");
    });
});