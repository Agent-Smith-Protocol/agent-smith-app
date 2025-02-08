import { ContentContainer } from '../layout/ContentContainer/ContentContainer.tsx';
import { Chart } from '../modules/Chart';
import { FormContainer } from '../modules/Form';

export const DashboardPage = () => {
  return (
    <main>
      <section className='flex gap-5 mb-10'>
        <ContentContainer className='grow'>
          <div className='flex flex-col gap-3'>
            <h3>Your deposits</h3>
            <span className='text-base-content text-2xl font-bold'>$100</span>
          </div>
        </ContentContainer>
        <ContentContainer className='grow'>
          <div className='flex flex-col gap-3'>
            <h3>Accrued Yield</h3>
            <span className='text-base-content text-2xl font-bold'>$21</span>
          </div>
        </ContentContainer>
        <ContentContainer className='grow'>
          <div className='flex flex-col gap-3'>
            <h3>Estimated daily yields</h3>
            <span className='text-base-content text-2xl font-bold'>$2</span>
          </div>
        </ContentContainer>
      </section>

      <div className="w-full flex gap-5">
        <section className="w-full">
          <Chart/>
        </section>

        <section>
          <FormContainer/>
        </section>
      </div>
    </main>
  )
}