import React, { useState, useEffect } from 'react';

export default function User() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [accept, setAccept] = useState('');
  const [message, setMessage] = useState('');

  let letterCount = (password.match(/[A-Za-z]+/g) ?? []).length;
  let numberCount = (password.match(/[0-9]+/g) ?? []).length;

  useEffect(() => {
    if (password.length === 0) {
      setAccept(null);
      setError(null);
    }
    //      else if (password.length < 10 && letterCount <1) {
    //       setError('Password is not accepted');
    //       setMessage('password is not long enough');
    //       setAccept(null);
    //     }
    else if (letterCount < 1 && password.length < 10) {
      setError('Password is not accepted');
      setMessage('password is not long enough and that the password does not include a letter.');
      setAccept(null);
    } else if (password.length < 10 && numberCount < 1) {
      setError('password is not accepted');
      setMessage('password is not long enough and should include number');
      setAccept(null);
    } else if (password.length >= 10 && letterCount > 0 && numberCount > 0) {
      setAccept('password is accepted');
      setError(null);
      setMessage(null);
    }
  }, [password, letterCount, numberCount]);
  return (
    <div className="py-8 max-w-sm">
      <h1 className="text-xl font-semibold text-slate-700">User password</h1>
      <input
        id="user-password"
        className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com'
        placeholder="enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <p>{password.length}</p>
      <p id="user-error" className="text-red-600 font-semibold text-sm">
        {error}
      </p>
      <p id="user-accept" className="text-green-500 font-semibold text-sm">
        {accept}
      </p>

      <p id="user-message" className="text-blue-500 font-semibold text-sm">
        {message}
      </p>
    </div>
  );
}
