let ADD_POST = 'ADD-POST'

let initialState = {
    PostsData: [
        { id: 0, user: 'Elon Musk', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione ipsam dicta quidem blanditiis, repudiandae tempora corporis quasi sunt. Accusantium natus illum dolores assumenda fugiat rerum dicta id repellat eveniet.' },
        { id: 1, user: 'Elon Musk', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione ipsam dicta quidem blanditiis, repudiandae tempora corporis.' },
    ],
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:{

            return {
                ...state,
                PostsData: [...state.PostsData, {id: state.PostsData.length + 1, user: 'Elon Musk', text: action.NewPostText}],
            }

        }

        default: return state
    }
}

export const AddPost = (text) => {
    return { type: ADD_POST, NewPostText: text }
}

export default profileReducer