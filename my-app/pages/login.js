import { useState } from 'react';
function Login() {
  const [passValue, setPassValue] = useState('');
  const myPassword = "123";
  function getPassValue(event) {
    let password = event.target.value;
    setPassValue(password)
  }
  console.log(passValue)
  function checkPassword() {
    if (passValue === myPassword) {
      console.log('work')
    }
  }
  return <div className="login__page">
    <div className="login__wrap">
      <form>
        <input onChange={(event) => { getPassValue(event) }} value={passValue} type="password" className="input" />
        <button onClick={() => checkPassword()} className="button">Войти</button>
      </form>
    </div>
    <style jsx>{`
    .login__page{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
.login__wrap,
form{
  width: 200px;
  height: 200px;
  background: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
      align-items: center;

}
.input{
  margin-bottom: 30px;
}`}</style>
  </div>
}

export default Login
