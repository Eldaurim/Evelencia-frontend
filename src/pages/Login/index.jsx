import { useState } from 'react'
import axios from 'axios'
import env from 'react-dotenv'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

function Login() {
  let history = useHistory()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [error, setError] = useState(false)
  const { register, handleSubmit } = useForm()
  const onSubmit = (e) => {
    setEmailValue(e.email)
    setPasswordValue(e.password)
    postLogin()
  }

  async function postLogin() {
    try {
      const response = await axios.post(env.API_URL + '/login', {
        email: emailValue,
        password: passwordValue,
      })
      setError(false)
      const apiResponse = await response.data
      localStorage.setItem('evelencia_login', JSON.stringify(apiResponse))
      history.push('/status')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div>
      {error ? <div>Désolé une erreur est survenue!</div> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email :<input type='email' {...register('email')} />
        </label>
        <label>
          Password :<input type='password' {...register('password')} />
        </label>
        <input type='submit' value='Connexion' />
      </form>
    </div>
  )
}

export default Login
