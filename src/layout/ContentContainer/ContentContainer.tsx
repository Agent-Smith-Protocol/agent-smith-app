import { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode
}

export const ContentContainer = (props: ContentContainerProps) => {
  const { children } = props

  return (
    <div className='bg-card-bg border border-card-bdr rounded-sm text-card-foreground p-4'>
      {children}
    </div>
  )
}