import React, { useEffect, useState } from 'react'
import FloatingButton from './components/FloatingButton/FloatingButton'
import QuoteBox from './components/Quote/QuoteBox'
import { AnimatePresence } from 'framer-motion'
import './App.css'

const quotesGist =
  'https://gist.githubusercontent.com/Sharmaketann/c48b0ba6a5cbc17c5d5bf1d43c04c5fd/raw/306e1a85e3d2f7a451be8097b62c701bcf8ae8e1/quote.json'
const tweetIt = 'https://twitter.com/intent/tweet'
const colorPairings = [
  {
    color1: '#facc15',
    color2: '#f97316',
  },
  {
    color1: '#4ade80',
    color2: '#06b6d4',
  },
  {
    color1: '#a855f7',
    color2: '#6366f1',
  },
  {
    color1: '#ec4899',
    color2: '#f43f5e',
  },
  {
    color1: '#fb923c',
    color2: '#db2777',
  },
  {
    color1: '#38bdf8',
    color2: '#6366f1',
  },
  {
    color1: '#22d3ee',
    color2: '#0ea5e9',
  },
]

const App = () => {
  const [currentQuote, setCurrentQuote] = useState('')
  const [currentGradient, setCurrentGradient] = useState([])

  const getQuotes = () => {
    fetch(quotesGist)
      .then((res) => res.json())
      .then(
        (result) => {
          setCurrentQuote(
            result.quotes[Math.floor(Math.random() * result.quotes.length)]
          )
        },
        (error) => {
          console.log(error)
        }
      )

    setCurrentGradient(
      colorPairings[Math.floor(Math.random() * colorPairings.length)]
    )
  }

  const encodeTweets = () => {
    let encodedTweet = encodeURIComponent(
      '"' + currentQuote.quote + '" - ' + currentQuote.author
    )
    let composedTweetUrl = `${tweetIt}?text=${encodedTweet}`
    return composedTweetUrl
  }

  const triggerChange = () => {
    getQuotes()
    encodeTweets()
  }

  useEffect(() => {
    getQuotes()
    encodeTweets()
    // eslint-disable-next-line
  }, [])

  return (
    <AnimatePresence>
      <div className='App'>
        <FloatingButton
          triggerChange={triggerChange}
          currentGradient={currentGradient}
        />
        <QuoteBox
          currentQuote={currentQuote}
          currentGradient={currentGradient}
          composedTweetUrl={encodeTweets()}
        />
      </div>
    </AnimatePresence>
  )
}

export default App
