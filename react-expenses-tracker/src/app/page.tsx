import Image from 'next/image'
import React from 'react'
import Header from './components/Header'
import ExpensesTracker from './components/ExpensesTracker'



export default function Home() {
  return (
    <>
      <Header />
      <ExpensesTracker />
    </>
  )
}
