export default function cryptoReducer(state=[],action)
{
    switch (action.type) {
        case "GET_CRYPTO":
            return action.payload
            break;
    
        default:
            return null
            break;
    }
    // return [
    //     "Hello world"
    // ]
}