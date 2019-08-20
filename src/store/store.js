import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

// import root reducer
import rootReducer from "./rootReducer";

function configureStore(preloadedState) {
    // Middlewares

    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];

    // let composedEnhancers;
    // if (NODE.env.USE_DEV_TOOL_EXTENSION) {
    const composedEnhancers = composeWithDevTools(...enhancers); // NOT ON PRODUCTION
    // } else {
    // composedEnhancers = compose(...enhancers); // ONLY PRODUCTION
    // }
    // .env.production ==> USE_DEV_TOOLS: false

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}

export default configureStore;
