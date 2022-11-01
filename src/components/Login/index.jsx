import { useState } from 'react'
import axios from 'axios'
import env from 'react-dotenv'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const LoginStyle = styled.div`
  display: flex;
`

const FormStyle = styled.div`
  margin: auto;
`

const LabelStyle = styled.label`
  margin-right: 15px;
`

const InputStyle = styled.input`
  border-radius: 15px;
  padding: 7px 15px;
  border: 1px black solid;
  text-decoration: none;
`
const ButtonStyle = styled.input`
  border-radius: 15px;
  padding: 7px 15px;
  text-decoration: none;
  border: none;
  color: #fff;
  background: #005aee;
`

function Login() {
  let history = useHistory()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const { register, handleSubmit } = useForm()
  const onSubmit = (e) => {
    setEmailValue(e.email)
    setPasswordValue(e.password)
    postLogin()
  }

  function postLogin() {
    axios
      .post(
        env.API_URL + '/login',
        {
          email: emailValue,
          password: passwordValue,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setError(false)
        const apiResponse = response.data
        localStorage.setItem('evelencia_login', JSON.stringify(apiResponse))
        history.push('/status')
      })
      .catch((error) => {
        setError(true)
        setErrorMessage(error)
      })
  }

  // async function postLogin() {
  // try {
  // const response = await axios.post(env.API_URL + '/login', {
  // email: emailValue,
  // password: passwordValue,
  // })
  // setError(false)
  // const apiResponse = await response.data
  // localStorage.setItem('evelencia_login', JSON.stringify(apiResponse))
  // history.push('/status')
  // } catch (error) {
  // setError(true)
  // setErrorMessage(error)
  // }
  // }

  return (
    <LoginStyle>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <LabelStyle>
          Email : <InputStyle type='email' {...register('email')} />
        </LabelStyle>
        <LabelStyle>
          Password : <InputStyle type='password' {...register('password')} />
        </LabelStyle>
        <ButtonStyle type='submit' value='Connexion' />
      </FormStyle>
      {error === true ? <div>{errorMessage}</div> : null}
    </LoginStyle>
  )
}

export default Login
