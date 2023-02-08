import React, { ReactNode } from 'react'
interface SectionProps {
  title: string
  children: ReactNode
}
const Section = ({ title, children }: SectionProps) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}
Section.defaultProps = {
  title: 'Sub heading',
  children: '',
}

export default Section
