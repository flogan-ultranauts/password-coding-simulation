import React,{useState} from 'react'
// import {TabList,TabPanel,Tabs,Tab} from 'react-tabs'


export default function Admin() {
    const [adminPassword,setAdminPassword]= useState('')
    const [adminError,setAdminError]= useState('')
    const [adminAccept,setAdminAccept]=useState('')


    function handleAdmin(e) {
        setAdminPassword(e.target.value);

       let symbolCount = (adminPassword.match(/\W/) ?? []).length;

        if(adminPassword.length < 13 || symbolCount < 1){
            setAdminError("password is accepted")
        } else if(adminPassword.length >=13 && symbolCount >0){
            setAdminError(null)
            setAdminAccept("Admin password accepted")
        }
        
    }
    return (
        <div>
          
          
       
         
          <h2 className="underline text-blue-600 font-normal text-lg mt-7">for admin </h2>
          <div>
            <input
              type="text"
              name="userpassword"
              value={adminPassword}
              onChange={handleAdmin}
              className="px-3 py-2 mt-10 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter user password"
            />
            <div>{adminPassword}</div>
            <div id="output" className="text-red-500 text-lg font-medium">
              {adminError}
            </div>
            <div className="text-green-500 text-lg font-medium">{adminAccept} </div>
            
          </div>
     
    
          
         
     
   
        </div>
    )
}