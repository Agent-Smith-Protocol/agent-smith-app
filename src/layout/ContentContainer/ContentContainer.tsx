import { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode
  className?: string
}

export const ContentContainer = (props: ContentContainerProps) => {
  const { children, className = '' } = props

  const baseStyles = 'bg-base-200 border border-base-100 rounded-sm p-4'

  const classes = `${baseStyles} ${className}`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}