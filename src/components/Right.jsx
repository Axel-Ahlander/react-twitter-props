import React from 'react'
import WhoToFollow from './WhoToFollow'
import WhatsHappening from './WhatsHappening'
import GetVerified from './GetVerified'
import Search from './Search'

function Right(props) {
  return (
    <aside className='right-side'>
                    <Search onChange = {props.onChange}/>
    
                    <GetVerified/>
    
                    <WhatsHappening/>
                    <WhoToFollow imgElon={props.imgElon} imgZuck={props.imgZuck} />
                </aside>
  )
}

export default Right