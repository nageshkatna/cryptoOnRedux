import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";

const combine= combineReducers(
    {
        crypto: cryptoReducer
    }
);

export default combine;