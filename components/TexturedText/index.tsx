import React from 'react'

interface Props {
  texts: string[],
  patternUrl: string,
  className: string,
  style: object
}

function TexturedText(props: Props) {
  const { texts, patternUrl, className, style } = props

  return (
    <div
      style={{
        backgroundImage: `url(${patternUrl})`,
        backgroundSize: 'cover',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        ...style
      }}
      className={className}
    >
      {
        texts.map((text, index) => <span key={index}>{text}<br/></span>)
      }
    </div>
  )
}

export default TexturedText
