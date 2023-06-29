import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-10 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-20'>
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{data.main.temp.toFixed(0)}&deg;F</p>
      </div>
      {/* Bottom */}

<div>
    <p className='font-bold text-2xl text-center pb-20'>Weather in {data.name}</p>
    <div className='flex justify-between text-center'>
        <div>
            <p className='font-bold text-xl'>Feels Like</p>
            <p className='text-2xl'>{data.main.feels_like.toFixed(0)}&deg;F</p>
        </div>
        <div>
            <p className='font-bold text-xl'>Humidity</p>
            <p className='text-2xl'>{data.main.humidity}%</p>
        </div>
        <div>
            <p className='font-bold text-xl'>Wind</p>
            <p className='text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
        </div>
    </div>
</div>

    </div>
  );
};

export default Weather;