import { Select } from '../shared/Select/Select.tsx';
import { ContentContainer } from '../layout/ContentContainer/ContentContainer.tsx';

export const AgentPage = () => {
  const agentOptions = [
    {label: 'BOSS', value: 'boss'}
  ]

  const actionTypeOptions = [
    {label: 'SWAP', value: 'swap'}
  ]

  return (
    <main className='flex flex-col gap-5'>
      <div className='w-full flex gap-4'>
        <Select defaultValue={'Filter by agent'} options={agentOptions}/>
        <Select defaultValue={'Filter by action type'} options={actionTypeOptions}/>
      </div>

      <ContentContainer className='flex '>
        <span className='mr-12'>Logo</span>
        <span className='grow'>Action details from db</span>
        <div className='flex gap-4'>
          <span className='text-info'>Action type</span>
          <span>Date</span>
        </div>
      </ContentContainer>
    </main>
  )
}