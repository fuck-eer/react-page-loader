import { useCallback, useState } from 'react'
import { Loader } from '../Loader/Loader'

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false)
  const setLoading = useCallback((bool: boolean) => {
    setIsLoading(bool)
  }, [])

  return { setLoading, isLoading, Loader }
}
