import React from 'react'

interface NavigationDotsProps{
  active: string,
}

const NavigationDots = ({active}: NavigationDotsProps) => {
  return (
    <div className='app__navigation'>
        {['header', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <a className='app__navigation-dot' style={active === item ? { backgroundColor: '#313BAC'} : {} } key={item + index} href={`#${item}`}/>
        ))}
    </div>
  )
}

export default NavigationDots