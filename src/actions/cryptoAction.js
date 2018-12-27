import axios from "axios";

export default function getCrypto(){
    var result= axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=54a30fa4-f30d-4ffb-a2b7-65a907b4a460')
    .then((Response)=>{
        // console.log(Response.data)
        // dispatch({type: "GET_CRYPTO", payload: Response.data})
        return Response.data.data
    })
    .catch((err)=>{
        // dispatch({type: "GET_CRYPTO_ERR", payload: err})
        return err
    })
    return {
        type: "GET_CRYPTO",
        payload: result
    }
}