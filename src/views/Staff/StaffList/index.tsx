import React from 'react'
import type { FC, ReactNode } from 'react'
import { Result, Button } from 'antd'

interface IProps {
  children?: ReactNode
}

const StaffList: FC<IProps> = (_props) => {
  return (
    <>
      <div>
        <h1>员工列表</h1>
      </div>
    </>
  )
}

export default StaffList
