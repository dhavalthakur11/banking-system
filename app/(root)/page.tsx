import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

function Home() {
    const loggedIn= {firstName:"Dhaval"};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn.firstName || "Guest"}
                    subtext="Access and Manage Your Account and Transactions Effeciently."
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250}
                />
            </header>
        </div>
    </section>
  )
}

export default Home;
