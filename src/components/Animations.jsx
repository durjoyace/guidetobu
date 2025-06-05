import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Zap,
  Award,
  TrendingUp,
  Activity,
  Sparkles,
  Heart,
  MessageSquare,
  Eye,
  ThumbsUp,
  Share2,
  Bookmark,
  ChevronRight,
  ArrowUp,
  Target,
  BarChart3
} from 'lucide-react'

// Floating Animation Component
export const FloatingElement = ({ children, delay = 0, duration = 3 }) => {
  return (
    <div 
      className="floating-element"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  )
}

// Pulse Animation Component
export const PulseElement = ({ children, color = 'primary' }) => {
  return (
    <div className={`pulse-${color} relative`}>
      {children}
    </div>
  )
}

// Slide In Animation Component
export const SlideInElement = ({ children, direction = 'up', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`slide-in-${direction} ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  )
}

// Hover Card Component with Enhanced Animations
export const AnimatedCard = ({ children, hoverScale = 1.05, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`animated-card ${className} ${isHovered ? 'hovered' : ''}`}
      style={{
        transform: isHovered ? `scale(${hoverScale})` : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

// Typing Animation Component
export const TypingAnimation = ({ text, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, speed)
        return () => clearTimeout(timer)
      }
    }, delay)
    
    return () => clearTimeout(startTimer)
  }, [currentIndex, text, speed, delay])

  return (
    <span className="typing-animation">
      {displayText}
      <span className="cursor">|</span>
    </span>
  )
}

// Counter Animation Component
export const CounterAnimation = ({ end, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true)
      const increment = end / (duration / 16) // 60fps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }, delay)
    
    return () => clearTimeout(startTimer)
  }, [end, duration, delay])

  return (
    <span className={`counter-animation ${hasStarted ? 'started' : ''}`}>
      {count.toLocaleString()}
    </span>
  )
}

// Progress Bar Animation Component
export const AnimatedProgressBar = ({ value, max = 100, color = 'primary', delay = 0 }) => {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentValue(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  const percentage = (currentValue / max) * 100

  return (
    <div className="animated-progress-container">
      <div className="animated-progress-bg">
        <div 
          className={`animated-progress-fill bg-${color}`}
          style={{
            width: `${percentage}%`,
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>
    </div>
  )
}

// Stagger Animation Container
export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  return (
    <div className="stagger-container">
      {React.Children.map(children, (child, index) => (
        <div 
          className="stagger-item"
          style={{
            animationDelay: `${index * staggerDelay}s`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

// Parallax Scroll Component
export const ParallaxElement = ({ children, speed = 0.5, className = '' }) => {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * speed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div 
      className={`parallax-element ${className}`}
      style={{
        transform: `translateY(${offsetY}px)`
      }}
    >
      {children}
    </div>
  )
}

// Morphing Button Component
export const MorphingButton = ({ 
  children, 
  morphTo, 
  onClick, 
  className = '',
  variant = 'default',
  size = 'default'
}) => {
  const [isMorphed, setIsMorphed] = useState(false)

  const handleClick = () => {
    setIsMorphed(true)
    setTimeout(() => setIsMorphed(false), 2000)
    if (onClick) onClick()
  }

  return (
    <Button
      className={`morphing-button ${className} ${isMorphed ? 'morphed' : ''}`}
      variant={variant}
      size={size}
      onClick={handleClick}
    >
      <span className={`button-content ${isMorphed ? 'hidden' : 'visible'}`}>
        {children}
      </span>
      <span className={`button-morph ${isMorphed ? 'visible' : 'hidden'}`}>
        {morphTo}
      </span>
    </Button>
  )
}

// Ripple Effect Component
export const RippleButton = ({ children, onClick, className = '' }) => {
  const [ripples, setRipples] = useState([])

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    }
    
    setRipples(prev => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)
    
    if (onClick) onClick(e)
  }

  return (
    <button 
      className={`ripple-button ${className}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size
          }}
        />
      ))}
    </button>
  )
}

// Glitch Effect Component
export const GlitchText = ({ children, intensity = 1 }) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`glitch-text ${isGlitching ? 'active' : ''}`} data-text={children}>
      {children}
    </span>
  )
}

// Particle Background Component
export const ParticleBackground = ({ particleCount = 50 }) => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    }))
    setParticles(newParticles)
  }, [particleCount])

  return (
    <div className="particle-background">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.speed}s`
          }}
        />
      ))}
    </div>
  )
}

// Loading Skeleton Component
export const LoadingSkeleton = ({ className = '', lines = 3 }) => {
  return (
    <div className={`loading-skeleton ${className}`}>
      {Array.from({ length: lines }, (_, i) => (
        <div 
          key={i} 
          className="skeleton-line"
          style={{
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  )
}

// Magnetic Button Component
export const MagneticButton = ({ children, strength = 0.3, className = '' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = React.useRef(null)

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <button
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </button>
  )
}

