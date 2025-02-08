import { useForm } from 'react-hook-form';

interface DepositFormProps {
  balance: number
}

interface FormData {
  deposit: number
}

export const DepositForm = (props: DepositFormProps) => {
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
          <input {...register('deposit')} name={'deposit'} type="number" className="grow w-full" placeholder="Search"/>
          <span>USDC</span>
        </label>
      </fieldset>
      <button type='submit' className='btn btn-soft btn-accent w-full'>Submit</button>
    </form>
  )
}