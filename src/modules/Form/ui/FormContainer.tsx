import { ContentContainer } from '../../../layout/ContentContainer/ContentContainer.tsx';
import { useState } from 'react';
import { DepositForm } from './DepositForm.tsx';
import { WithdrawForm } from './WithdrawForm.tsx';

export const FormContainer = () => {
  const [activeTab, setActiveTab] = useState('deposit')
  const balance = 100

  return (
    <ContentContainer className={'w-100'}>
      <div className='flex mb-4'>
        <button className={activeTab === 'deposit' ? 'btn-active grow btn btn-soft btn-success' : 'grow btn btn-soft btn-success'} onClick={() => setActiveTab('deposit')}>
          Deposit
        </button>
        <button className={activeTab === 'withdraw' ? 'btn-active grow btn btn-soft btn-warning' : 'grow btn btn-soft btn-warning'} onClick={() => setActiveTab('withdraw')}>
          Withdraw
        </button>
      </div>

      {activeTab === 'deposit' &&
        <DepositForm balance={balance}/>
      }

      {activeTab === 'withdraw' &&
        <WithdrawForm balance={balance}/>
      }
    </ContentContainer>
  )
}