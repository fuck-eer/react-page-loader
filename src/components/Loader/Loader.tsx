import React from 'react'
import { createPortal } from 'react-dom'
import PagePulse from './PagePulse/PagePulse'
import PluckCards from './PluckCards/PluckCards'
import Spinner from './Spinner/Spinner'
import '../index.css'
export const loaderTypes = ['spinner', 'pluckCards', 'pagePulse'] as const

export type LoaderHookProps = {
  loaderType: typeof loaderTypes[number]
}
export const Loader = ({ loaderType }: LoaderHookProps) => {
  const loader =
    loaderType === 'spinner' ? (
      <Spinner />
    ) : loaderType === 'pagePulse' ? (
      <PagePulse />
    ) : loaderType === 'pluckCards' ? (
      <PluckCards />
    ) : (
      <></>
    )
  return createPortal(<div>{loader}</div>, document.getElementById('page-loader')!)
}
