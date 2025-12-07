"use client"

import { useState, useEffect } from "react"
import Loader from "./loader"

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loader onComplete={handleLoaderComplete} />
  }

  return <>{children}</>
}




