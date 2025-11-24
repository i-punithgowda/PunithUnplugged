import React, { useState, useEffect } from 'react'

const Typist = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  showCursor = true,
  cursorChar = '|',
  onTypingComplete,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showCursorState, setShowCursorState] = useState(true)

  useEffect(() => {
    let timeoutId
    let cursorInterval

    // Initial delay
    const startDelay = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0

      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeoutId = setTimeout(typeNextChar, speed)
        } else {
          setIsTyping(false)
          if (onTypingComplete) {
            onTypingComplete()
          }
        }
      }

      typeNextChar()
    }, delay)

    // Cursor blinking effect
    if (showCursor) {
      cursorInterval = setInterval(() => {
        setShowCursorState(prev => !prev)
      }, 530)
    }

    return () => {
      clearTimeout(startDelay)
      clearTimeout(timeoutId)
      clearInterval(cursorInterval)
    }
  }, [text, speed, delay, showCursor, onTypingComplete])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && showCursorState && (
        <span className="inline-block ml-0.5 text-current" aria-hidden="true">
          {cursorChar}
        </span>
      )}
    </span>
  )
}

export default Typist

