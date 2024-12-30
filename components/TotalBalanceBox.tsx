import React from 'react'
import AnimatadeCounter from './ui/AnimatadeCounter'
import DoughnutChart from './ui/DoughnutChart'

function TotalBalanceBox({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) {
  return (
    <section className='total-balance'>
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts}/>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
        Bank Accounts: {totalBanks} 
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>
          <div className="total-balane-amount flex-center gap-2">
            <AnimatadeCounter 
              amount={totalCurrentBalance}
            />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default TotalBalanceBox
