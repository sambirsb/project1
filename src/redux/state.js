import directReducer from "./direct-reducer"
import feedReducer from "./feed-reducer"

let Store = {
  _state: {
    FeedPage: {
      PostsData: [
        { id: '1', user: 'Elon Musk', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione ipsam dicta quidem blanditiis, repudiandae tempora corporis quasi sunt. Accusantium natus illum dolores assumenda fugiat rerum dicta id repellat eveniet.' },
        { id: '2', user: 'Elon Musk', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione ipsam dicta quidem blanditiis, repudiandae tempora corporis quasi sunt. Accusantium natus illum dolores assumenda fugiat rerum dicta id repellat eveniet.' },
      ],

      NewPostText: ''
    },

    DirectPage: {
      DialogsData: [
        { id: '0', name: 'Igor Voytenko', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: '1', name: 'Golovach Lena', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: '2', name: 'Miron Lox', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: '3', name: 'Jonh Sambir', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: '4', name: 'Viber Sambir', img: 'https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=' },
        { id: '5', name: 'Oleg Vinnik', img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000' },
      ],
      MessagesData: [
        { id: '0', message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit' },
        { id: '1', message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quas fugit facilis officiis similique est dolores corrupti fuga a. Facere.' },
        { id: '2', message: 'Lorem ' },
        { id: '3', message: 'Lorem ipsum dolor sit amet ' },
        { id: '4', message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quas' },
        { id: '5', message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
      ],

      NewMessageText: ''
    }
  },

  _callSubscriber() {
    alert('State changed')
  },

  GetState() {
    return this._state
  },

  Subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.FeedPage = feedReducer(this._state.FeedPage , action)
    this._state.DirectPage = directReducer(this._state.DirectPage , action)
    this._callSubscriber(this._state)

  },

}

window.State = Store._state

export default Store