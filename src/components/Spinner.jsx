import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles color="#2ae0c8" height={50} width={200} className="m-5" />

      <div className="text-lg text-center px-2">{message}</div>
    </div>
  );
};

export default Spinner;
