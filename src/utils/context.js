import React, { useState, useEffect, useLayoutEffect, useContext } from "react"

const AppContext = React.createContext()

const titlesArr = [
  "Web Developer",
  "Novice Cook",
  "Milk Tea Enjoyer",
  "Tinkerer",
  "Monster Hunter",
  "Warrior of Light",
]

const getStorageTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState(getStorageTheme())
  const [navActive, setNavActive] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [randomIdx, setRandomIdx] = useState(0)

  const toggleTheme = () => {
    setTheme((previousTheme) => {
      if (previousTheme === "dark-theme") {
        return setTheme("light-theme")
      }
      return setTheme("dark-theme")
    })
  }

  const trackHeight = () => {
    setScrollHeight(window.scrollY)
  }

  function cycleTitles() {
    let randomNum = Math.floor(Math.random() * titlesArr.length)
    while (randomNum === randomIdx) {
      randomNum = Math.floor(Math.random() * titlesArr.length)
    }
    setRandomIdx(randomNum)
  }

  const handleNav = () => {
    setNavActive(!navActive)
  }

  const closeNav = () => {
    setNavActive(false)
  }

  const checkWindowSize = () => {
    setWindowSize(window.innerWidth)
  }

  const scrollToTop = () => {
    closeNav()
    document.body.scrollTop = 0
  }

  useEffect(() => {
    window.addEventListener("scroll", trackHeight)
    return () => {
      window.removeEventListener("scroll", trackHeight)
    }
  })

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize)
    return () => {
      window.removeEventListener("resize", checkWindowSize)
    }
  }, [])

  useEffect(() => {
    if (windowSize > 768) {
      setNavActive(false)
    }
  }, [windowSize])

  return (
    <AppContext.Provider
      value={{
        navActive,
        setNavActive,
        handleNav,
        theme,
        setTheme,
        isLoading,
        setIsLoading,
        toggleTheme,
        closeNav,
        windowSize,
        scrollToTop,
        cycleTitles,
        titlesArr,
        scrollHeight,
        randomIdx,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
