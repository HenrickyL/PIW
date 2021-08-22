import Cabecalho from "../../components/Cabecalho"
import { FormPostar } from "../../components/FormPostar"

export const PaginaPostar = (props)=>{
    return (
        <div className='home'>
            <Cabecalho/>
            <FormPostar />
        </div>
    )
}