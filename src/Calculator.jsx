import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex flex-col gap-2 calculator bg-gray-900 text-white rounded-lg p-4 max-w-md mx-auto mt-[20%]">
      <input
        type="text"
        value={result || input}
        readOnly
        className="w-full p-2 bg-gray-800 rounded-lg text-right"
      />
      <div className="grid grid-cols-4 gap-2 mt-4">
        <button
          onClick={() => handleButtonClick('7')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick('8')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick('9')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick('+')}
          className="bg-orange-500 hover:bg-orange-400 rounded-lg p-2 text-lg"
        >
          +
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => handleButtonClick('4')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick('5')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick('6')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick('-')}
          className="bg-orange-500 hover:bg-orange-400 rounded-lg p-2 text-lg"
        >
          -
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => handleButtonClick('1')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick('2')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick('3')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick('*')}
          className="bg-orange-500 hover:bg-orange-400 rounded-lg p-2 text-lg"
        >
          *
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => handleButtonClick('0')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          0
        </button>
        <button
          onClick={() => handleButtonClick('.')}
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 text-lg"
        >
          .
        </button>
        <button
          onClick={() => handleButtonClick('=')}
          className="bg-green-500 hover:bg-green-400 rounded-lg p-2 text-lg"
        >
          =
        </button>
        <button
          onClick={() => handleButtonClick('C')}
          className="bg-red-500 hover:bg-red-400 rounded-lg p-2 text-lg"
        >
          C
        </button>
        <button
          onClick={() => handleButtonClick('/')}
          className="bg-orange-500 hover:bg-orange-400 rounded-lg p-2 text-lg"
        >
          /
        </button>
      </div>
    </div>
  );
}

export default Calculator;