'use client'
import CountUp from 'react-countup'

function AnimatadeCounter({amount}:{amount:number}) {
  return (
    <div className='w-full'>
      <CountUp 
        decimals={2}
        prefix="$ "
        decimal="."
        end={amount}/>
    </div>
  )
}

export default AnimatadeCounter
