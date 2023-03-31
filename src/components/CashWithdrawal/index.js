import {useState} from 'react'
import {MainContainer,Container,NameCon,Initial,Name,Rupees,Balance,Rupee,Rup,Withdraw,Sum,InitialCon,Ul} from './styledComponents'

import DenominationItem from '../DenominationItem'

const CashWithdrawal=(props)=>{
    const [number,setNumber]=useState(2000);
    const {denominationsList}=props

    const DoSum=(value)=>{
        setNumber(prevState=>(prevState-value))
    }

    return(
        <MainContainer>
            <Container>
                <NameCon>
                    <InitialCon>
                        <Initial>S</Initial>
                    </InitialCon>
                    <Name>Sarah Williams</Name>
                </NameCon>
                <Rupees>
                    <Balance>Your Balance</Balance>
                    <Rupee>{number}</Rupee>
                </Rupees>
                <Rup>In Rupees</Rup>
                <Withdraw>Withdraw</Withdraw>
                <Sum>CHOOSE SUM(IN RUPEES)</Sum>
                <Ul>
                    {denominationsList.map(each=>
                    <DenominationItem details={each} key={each.id} Sum={DoSum}/>
                        )}
                </Ul>
            </Container>
        </MainContainer>
    )
}

export default CashWithdrawal