import axios from 'axios'
import env from 'react-dotenv'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import './form.css'

const LoginStyle = styled.div`
  display: flex;
`

const LabelStyle = styled.label`
  margin-right: 15px;
`

function Login() {
  let history = useHistory()
  const { register, handleSubmit } = useForm()

  const onSubmit = (e) => {
    axios
      .post(env.API_URL + '/login', {
        email: e.email,
        password: e.password,
      })
      .then((res) => {
        const apiResponse = res.data
        localStorage.setItem('evelencia_login', JSON.stringify(apiResponse))
        history.push('/status')
      })
      .catch((err) => {
        // console.log(err)
      })
  }

  return (
    <LoginStyle>
      <form className='form_style' onSubmit={handleSubmit(onSubmit)}>
        <LabelStyle>
          Email :{' '}
          <input className='input_form' type='email' {...register('email')} />
        </LabelStyle>
        <LabelStyle>
          Password :{' '}
          <input
            className='input_form'
            type='password'
            {...register('password')}
          />
        </LabelStyle>
        <input className='button_form' type='submit' value='Connexion' />
      </form>
    </LoginStyle>
  )
}

export default Login
