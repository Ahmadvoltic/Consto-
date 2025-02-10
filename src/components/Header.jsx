import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#262626] h-[54px]  flex justify-between '>
        <div>
        <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" className='w-[152px] m-4 ' alt="" />

        </div>
        <button className='bg-[#82B440] text-white px-[20px] py-[5px] m-2 rounded' >Buy Now</button>
    </div>
  )
}

export default Header