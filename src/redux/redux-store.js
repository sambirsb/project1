import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import directReducer from "./direct-reducer";
import feedReducer from "./feed-reducer";
import trendsReducer from './trends-reducer';
import UserPageReducer from './user-page-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    DirectPage: directReducer,
    ProfilePage: feedReducer,
    UsersPage: usersReducer,
    TrendsPage: trendsReducer,
    UserPage: UserPageReducer,
    auth: authReducer,
});

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let Store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = Store

export default Store