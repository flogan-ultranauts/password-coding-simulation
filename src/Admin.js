import React, { useState, useEffect } from 'react';

export default function Admin() {
  const [AdminPassword, setAdminPassword] = useState('');
  const [error, setError] = useState('');
  const [accept, setAccept] = useState('');

  let letterCount = (AdminPassword.match(/[A-Za-z]+/g) ?? []).length;
  let numberCount = (AdminPassword.match(/[0-9]+/g) ?? []).length;
  let specialChar = (AdminPassword.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g) ?? []).length;

  useEffect(() => {
    if (AdminPassword.length === 0) {
      setError(null);
      setAccept(null);
    } else if (letterCount < 1 && AdminPassword.length < 8) {
      setError('Password is not accepted');
      setAccept(null);
    } else if (AdminPassword.length < 8 && numberCount < 1) {
      setError('password is not accepted');
      setAccept(null);
    } else if (AdminPassword.length >= 8 && letterCount > 0 && numberCount > 0 && specialChar > 3) {
      setAccept('password is accepted');
      setError(null);
    }
  }, [AdminPassword, specialChar, letterCount, numberCount]);
  return (
    <div className="py-8 max-w-sm">
      <h1 className="text-xl font-semibold text-slate-700">admin password</h1>
      <input
        id="admin-password"
        className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com'
        placeholder="enter password"
        onChange={(e) => {
          setAdminPassword(e.target.value);
        }}
      />
      <p>{AdminPassword.length}</p>
      <p id="admin-error" className="text-red-600 font-semibold text-sm">
        {error}
      </p>
      <p id="admin-accept" className="text-green-600 font-semibold text-sm">
        {accept}
      </p>
    </div>
  );
}
