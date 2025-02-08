import { useForm } from 'react-hook-form';

interface WithdrawFormProps {
  balance: number
}

interface FormData {
  withdraw: number
}

export const WithdrawForm = (props: WithdrawFormProps) => {
  const { balance } = props

  const {register, handleSubmit } = useForm<FormData>({
    mode: 'onChange',
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="fieldset mb-8">
        <div className='flex justify-between items-center'>
          <legend className="fieldset-legend">Available balance: {balance}</legend>
          <button type='button' className='btn btn-xs'>MAX</button>
        </div>
        <label className="input input-accent input-ghost w-full border border-accent-content">
          <input {...register('withdraw')} name={'withdraw'} type="number" className="grow w-full" placeholder="Search"/>
          <span>USDC</span>
        </label>
        {/*<p className="fieldset-label">Optional</p>*/}
      </fieldset>
      <button type='submit' className='btn btn-soft btn-accent w-full'>Submit</button>
    </form>
  )
}