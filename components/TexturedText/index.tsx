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
        texts.map(text => <>{text}<br/></>)
      }
    </div>
  )
}

export default TexturedText
