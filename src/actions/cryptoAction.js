import axios from "axios";

export default function getCrypto(){
    return {
        type: "GET_CRYPTO",
        payload: axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=54a30fa4-f30d-4ffb-a2b7-65a907b4a460')
        .then((Response)=>{
            return Response
        })
        .catch((err)=>{
            return err
        })
    }
}