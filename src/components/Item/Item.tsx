import React, { FC, useRef, useEffect, useState } from 'react'
import './Item.css'
import { itemType } from '../../types'

export const Item: FC<itemType> = ({ name, time, sum, leftPadding }) => {
  const ref = useRef<null | HTMLDivElement>(null)
  const [width, setWidth] = useState<undefined | number>(0)
  const [lineWidth, setLineWidth] = useState(0)
  const [paddingLeft, setPaddingLeft] = useState(0)

  useEffect(() => {
    setWidth(ref.current?.offsetWidth)
  }, [])

  useEffect(() => {
    if (width) {
      const lw = (100 / sum) * time
      const pl = (100 / sum) * leftPadding

      setLineWidth(lw)
      setPaddingLeft(pl)
    }
  }, [width, sum, leftPadding])

  return (
    <li className={'item'}>
      <p className={'name'}>{name}</p>

      <div ref={ref} className={'line'}>
        <div style={{ width: `${paddingLeft}%` }} />
        <div className={'part'} style={{ width: `${lineWidth}%` }}>
          <p>{time}</p>
        </div>
      </div>
    </li>
  )
}
