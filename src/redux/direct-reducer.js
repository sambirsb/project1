let SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    DialogsData: [
        { id: 0, name: 'Igor Voytenko', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: 1, name: 'Golovach Lena', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: 2, name: 'Miron Lox', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: 3, name: 'Jonh Sambir', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: 4, name: 'Viber Sambir', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: 5, name: 'Oleg Vinnik', img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000' },
        { id: 6, name: 'Oleg Vinnik', img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000' },
        { id: 7, name: 'Oleg Vinnik', img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000' },
    ],
    MessagesData: [
        { id: 0, message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit' },
        { id: 1, message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quas fugit facilis officiis similique est dolores corrupti fuga a. Facere.' },
        { id: 2, message: 'Lorem ' },
        { id: 3, message: 'Lorem ipsum dolor sit amet ' },
        { id: 4, message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quas' },
        { id: 5, message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
    ],
}

const directReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {

            return {
                ...state,
                MessagesData: [...state.MessagesData, {id: state.MessagesData.length + 1, message: action.NewMessageText}],
            }

        }

        default: return state

    }
}

export const AddMessage = (NewMessageText) => {
    return {
        type: SEND_MESSAGE,
        NewMessageText: NewMessageText
    }
}

export default directReducer