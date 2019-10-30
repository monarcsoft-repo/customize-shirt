/*Store creation*/
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
import imageSrc from "./../reducers/image";
import textOnShirt from "./../reducers/textOnShirt";
import currentFontSize  from "./../reducers/currentTextFontSize";
import updatedFontSize from "./../reducers/updatedTextFontSize";

export default () => {
	const middleware = applyMiddleware(reduxThunk);
	const store = createStore(
		combineReducers({
			imageSrc, textOnShirt, currentFontSize, updatedFontSize
		}),
		compose(middleware)
	);
	return store;
};