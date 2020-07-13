import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import { loginMiddleware } from "./middlewares/loginMiddleware";
import { registrationMiddleware } from "./middlewares/registrationMiddlewares";


export const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(loginMiddleware),
        applyMiddleware(registrationMiddleware)
    )
);
