import axios from 'axios'
import env from 'react-dotenv'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import './form.css'

const SignupStyle = styled.div`
  display: flex;
`

const LabelStyle = styled.label`
  margin-right: 15px;
`

function Signup() {
  let history = useHistory()
  const { register, handleSubmit } = useForm()
  const onSubmit = (e) => {
    axios
      .post(
        env.API_URL + '/signup',
        {
          email: e.email,
          password: e.password,
          username: e.username,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        history.push('/status')
      })
      .catch((err) => {
        // console.log(err)
      })
  }

  return (
    <SignupStyle>
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
        <LabelStyle>
          Username :{' '}
          <input
            className='input_form'
            type='username'
            {...register('username')}
          />
        </LabelStyle>
        <input className='button_form ' type='submit' value='Connexion' />
      </form>
    </SignupStyle>
  )
}

export default Signup
