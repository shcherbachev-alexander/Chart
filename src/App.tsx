import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './state/reducers'
import { Item } from './components/Item/Item'
import { setList } from './state/actions/data'
import './App.css'

export const App: FC = () => {
  const { list } = useSelector((store: RootState) => store.dataReducer)
  const [sum, setSum] = useState(0)
  const dispatch = useDispatch()

  const randomAction = useCallback(() => {
    const newList = list.map((elem) => {
      elem.time = +(Math.random() * 100).toFixed(2)

      return elem
    })

    dispatch(setList(newList))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      randomAction()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const sum = list.reduce(function (sum, { time }) {
      return sum + time
    }, 0)

    setSum(sum)
  }, [list])

  return (
    <div className={'app'}>
      <p className={'spentTime'}>Spent Time (seconds)</p>

      <ul className={'list'}>
        {list.map(({ name, time }, index) => {
          const leftPadding = list.slice(0, index).reduce(function (sum, { time }) {
            return sum + time
          }, 0)

          return <Item key={name} name={name} time={time} sum={sum} leftPadding={leftPadding} />
        })}
      </ul>

      <button className={'button'} onClick={randomAction}>
        Set random
      </button>
    </div>
  )
}
