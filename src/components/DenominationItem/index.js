import {Li,Button} from './styledComponents'

const DenominationItem=(props)=>{
    const {details,Sum}=props
    const {value}=details

    const onSum=()=>{
        Sum(value)
    }

    return(
        <Li>
        <Button type="button" onClick={onSum}>{value}</Button>
        </Li>
    )
}

export default DenominationItem