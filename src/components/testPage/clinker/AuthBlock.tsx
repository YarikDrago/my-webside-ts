import React, {useState} from 'react';
import styled from 'styled-components'
import axios from "axios";

const ClinkerBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 10px;
  background-color: orange;
  
`
const AuthBlock = () => {
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    async function auth(email: string, password: string){
        console.log("try login")
        const promise = await axios.get('https://api.clinker.online/User/Auth',{
            withCredentials: false,
            params: {
                "email": email,
                "password": password
            },
            headers: {
                'Authorization': `Bearer asdlvhhew7s6vx`
            }
        })
        console.log("promise", promise.data)

    }

    return (
        <ClinkerBlock>
            <h1>Clinker</h1>
            <input
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
                type="text"
                placeholder={'email'}
            />
            <input
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                type="text"
                placeholder={'password'}
            />
            <button
                onClick={()=>{
                    console.log("Enter")
                    auth(email, password)
                }}
            >Enter</button>
        </ClinkerBlock>
    );
};

export default AuthBlock;