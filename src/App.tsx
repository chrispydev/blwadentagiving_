import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { configType } from './types';
import './App.css';

const App = () => {
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const currency = 'GHS';
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [amountRow, setAmountRow] = useState<any>();

  const config: configType = {
    reference: new Date().getTime().toString(),
    email: email,
    firstname: firstName,
    lastname: lastname,
    phone: phone,
    amount: amountRow * 100,
    publicKey: publicKey,
    currency: currency,
  };

  // you can call this function anything
  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    setFirstName('');
    setLastname('');
    setEmail('');
    setPhone('');
    setAmountRow('');
    alert('Thank you for giving.');
    // console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          className='bg-yellow-500 py-2 px-6 rounded-md shadow-lg text-gray-100 uppercase font-medium'
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Give Now
        </button>
      </div>
    );
  };

  return (
    <>
      <div className='selection:bg-yellow-500 selection:text-white flex flex-col justify-center items-center h-screen font-sans'>
        <div className='flex justify-center py-3'>
          <h1 className='text-3xl font-black bg-slate-700 p-4 rounded text-white shadow-xl'>
            CEC <span className='text-yellow-500'>ADENTA</span>
          </h1>
        </div>
        <div className='grid grid-cols-1 gap-8 p-4 shadow-lg border border-yellow-500 rounded-md'>
          <div className='flex flex-col md:flex-row justify-between md:items-center items-start'>
            <div className='mr-3 space-y-3'>
              <label
                className='mr-8 block text-sm text-gray-900'
                htmlFor='fName'
              >
                First Name
              </label>
              <input
                className='focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                type='text'
                name='fName'
                placeholder='Your First Name'
                value={firstName}
                id='fName'
                autoComplete='given-name'
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='space-y-3'>
              <label
                className='mr-8 mt-3 md:mt-0 block text-sm text-gray-900'
                htmlFor='fName'
              >
                Last Name
              </label>
              <input
                className='focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                type='text'
                name='fName'
                placeholder='Your Last Name'
                value={lastname}
                id='fName'
                autoComplete='given-name'
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-around md:items-center items-start'>
            <label className='mr-8 block text-sm text-gray-900' htmlFor='eMail'>
              Email Address
            </label>
            <input
              className='focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md flex flex-1'
              type='text'
              name='eMail'
              placeholder='Your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col md:flex-row justify-around md:items-center items-start'>
            <label
              className='mr-8 block text-sm text-gray-900'
              htmlFor='pNumber'
            >
              Phone Number
            </label>
            <input
              className='focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md flex flex-1'
              type='tel'
              name='pNumber'
              value={phone}
              placeholder='Your Phone Number'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='flex flex-col md:flex-row justify-around md:items-center items-start'>
            <label
              className='mr-8 block text-sm text-gray-900'
              htmlFor='amount'
            >
              Amount(GHC)
            </label>
            <input
              className='focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md flex flex-1'
              type='text'
              name='amount'
              value={amountRow}
              placeholder='Please enter amount'
              onChange={(e) => setAmountRow(e.target.value)}
            />
          </div>

          <div className='flex justify-center items-center  space-y-4'>
            <PaystackHookExample />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
