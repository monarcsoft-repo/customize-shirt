/*Store creation*/
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
import imageSrc from "./../reducers/image";

export default () => {
	const middleware = applyMiddleware(reduxThunk);
	const store = createStore(
		combineReducers({
			imageSrc
		}),
		compose(middleware)
	);
	return store;
};