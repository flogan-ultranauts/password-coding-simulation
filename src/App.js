
import {useState} from 'react'
import {TabList,TabPanel,Tabs,Tab} from 'react-tabs'
import Admin from './Admin'


function App() {
  const [userPassword,setUserPassword]= useState('')
  const [userError,setUserError]= useState('')
  const [userAccept,setUserAccept]=useState('')


  function handleUserchange(e) {
    setUserPassword(e.target.value);

    const letterCount = (userPassword.match(/[A-Za-z]+/g) ?? []).length
    const numberCount =(userPassword.match(/[0-9]+/g) ?? []).length

    // if(password.length < 8 || letterCount <1 || numberCount <1){
    //   setError('password is not accepted')
    //   setAccept(null);
    // }else if(password.length >= 8 && letterCount > 0 && numberCount > 0){
    //   setError(null);
    //   setAccept("password is accepted")
    // } 

    if(userPassword.length < 8 && letterCount <1 ){
      setUserError('password is not long enough and it does not include letter')
      setUserAccept(null);
    }else if(userPassword.length >= 8 && letterCount > 0 && numberCount > 0){
      setUserError(null);
      setUserAccept("password is accepted")
    } 
    
  }
  return (
    <div className="flex item-center flex-col justify-between py-80">
      {/* <div>

     <input type="password" className='px-3 py-2 mt-10 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none' value={userPassword} onChange={handleUserchange} placeholder='enter your password' />
      </div>
      <p className='text-red-500 text-sm font-normal'>

      {userError}
      </p>
  

      <p className='text-green-500 text-lg font-semibold '>

      {userAccept}
      </p> */}
      <div>
      <Tabs>
        <TabList className="flex border-b-2 gap-8 ">
          <Tab>Users Password</Tab>
          <Tab>Admin Password</Tab>
        </TabList>
        <TabPanel>
         
          <h2 className="underline text-blue-600 font-normal text-lg mt-7">for user </h2>
          <div>
            <input
              type="text"
              name="userpassword"
              value={userPassword}
              onChange={handleUserchange}
              className="px-3 py-2 mt-10 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter user password"
            />
            <div>{userPassword}</div>
            <div id="output" className="text-red-500 text-lg font-medium">
              {userError}
            </div>
            <div className="text-green-500 text-lg font-medium">{userAccept} </div>
            {/* <button
          onClick={validate(password)}
          className="px-3 py-2 bg-blue-700 hover:bg-blue-600 transition-all  duration-200 rounded-sm text-white w-full  shadow-sm"
        >
          submit
        </button> */}
          </div>
        </TabPanel>
        <TabPanel>
          {' '}
          {/* <Admin /> */}
          <Admin/>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
}

export default App;
