import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { configType } from './types';
import './App.css';

const App = () => {
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const currency = 'GHS';
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [amountRow, setAmountRow] = useState<any>();

  const config: configType = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amountRow * 100,
    publicKey: publicKey,
    currency: currency,
  };

  // you can call this function anything
  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    setName('');
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
          className='bg-yellow-400 py-2 px-6 rounded-md shadow-lg text-gray-100 uppercase font-medium'
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
      {/* <div>
        <h1>Welcome</h1>
      </div> */}
      <div className='flex justify-center items-center h-screen font-sans'>
        <div className='grid grid-cols-1 gap-8 shadow-lg p-10'>
          <div className='flex justify-between items-center flex-1'>
            <label className='mr-8 block text-sm text-gray-900' htmlFor='fName'>
              Full Name
            </label>
            <input
              className='focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
              type='text'
              name='fName'
              placeholder='Your Full Name'
              value={name}
              id='fName'
              autoComplete='given-name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center'>
            <label className='mr-8 block text-sm text-gray-900' htmlFor='eMail'>
              Email Address
            </label>
            <input
              className='focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
              type='text'
              name='eMail'
              placeholder='Your email address (Optional)'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center'>
            <label
              className='mr-8 block text-sm text-gray-900'
              htmlFor='pNumber'
            >
              Phone Number
            </label>
            <input
              className='focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
              type='tel'
              name='pNumber'
              value={phone}
              placeholder='Your Phone Number'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center'>
            <label
              className='mr-8 block text-sm text-gray-900'
              htmlFor='amount'
            >
              Amount(GHC)
            </label>
            <input
              className='focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
              type='text'
              name='amount'
              value={amountRow}
              placeholder='Please enter amount'
              onChange={(e) => setAmountRow(e.target.value)}
            />
          </div>

          <div className='flex justify-center items-center'>
            <PaystackHookExample />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
