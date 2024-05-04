import React from 'react'

export default function SectionWrapper({children, p, m, bg}) {
  return (
    <div style={{padding: p, margin: m, backgroundColor: bg}}>
      {children}
    </div>
  )
}
