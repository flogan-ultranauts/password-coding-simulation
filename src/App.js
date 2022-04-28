import logo from './logo.svg';
import {useState} from 'react'


function App() {
  const [password,setPassword]= useState('')
  const [error,setError]= useState('')
  const [accept,setAccept]=useState('')

  function handlechange(e) {
    setPassword(e.target.value);

    const letterCount = (password.match(/[A-Za-z]+/g) ?? []).length
    const numberCount =(password.match(/[0-9]+/g) ?? []).length

    if(password.length < 8 || letterCount <1 || numberCount <1){
      setError('password is not accepted')
      setAccept(null);
    }else if(password.length >= 8 && letterCount > 0 && numberCount > 0){
      setError(null);
      setAccept("password is accepted")
    }
    
  }
  return (
    <div className="flex item-center flex-col justify-between py-80">
      <div>

     <input type="password" value={password} onChange={handlechange} placeholder='enter your password' />
      </div>
      <p className='text-red-500 text-sm font-normal'>

      {error}
      </p>

      <p className='text-green-500 text-lg font-semibold '>

      {accept}
      </p>
    </div>
  );
}

export default App;
