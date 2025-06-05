import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Home, 
  Building, 
  GraduationCap, 
  UtensilsCrossed, 
  Users, 
  MapPin, 
  Lightbulb,
  Star,
  Search,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Clock,
  MessageSquare,
  BarChart3,
  Zap,
  Award,
  Target,
  Sparkles,
  ArrowUp,
  Filter,
  Heart,
  Share2,
  Bookmark,
  Eye,
  ThumbsUp,
  Calendar,
  MapPinIcon,
  DollarSign,
  Wifi,
  Coffee,
  Car,
  Train,
  Activity,
  Globe,
  Layers
} from 'lucide-react'
import { 
  DormRatingsChart, 
  AcademicPerformanceChart, 
  SocialLifePieChart, 
  TransportationRadarChart, 
  TrendsLineChart, 
  DiningComparisonChart 
} from '@/components/DataVisualization.jsx'
import { 
  InteractiveMap, 
  ActivityFeed, 
  AdvancedSearch, 
  LiveStatsDashboard 
} from '@/components/InteractiveFeatures.jsx'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigationCards = [
    {
      id: 'housing',
      title: 'Housing & Dorms',
      description: 'Real reviews from students who actually live there',
      icon: Building,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      stats: '127 reviews',
      trend: '+12 this week',
      rating: 4.2,
      features: ['Interactive Maps', 'Virtual Tours', 'Price Comparison']
    },
    {
      id: 'academics',
      title: 'Academics',
      description: 'Professor reviews and course insights',
      icon: GraduationCap,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      stats: '89 professors',
      trend: '+5 this week',
      rating: 4.1,
      features: ['Grade Distributions', 'Course Difficulty', 'Study Tips']
    },
    {
      id: 'food',
      title: 'Food & Dining',
      description: 'Best eats on and off campus',
      icon: UtensilsCrossed,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      stats: '45 spots',
      trend: '+8 this week',
      rating: 3.8,
      features: ['Live Hours', 'Menu Updates', 'Price Tracking']
    },
    {
      id: 'social',
      title: 'Social Life',
      description: 'Clubs, parties, and making friends',
      icon: Users,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      stats: '500+ clubs',
      trend: '+23 this week',
      rating: 4.5,
      features: ['Event Calendar', 'Club Finder', 'Social Matching']
    },
    {
      id: 'boston',
      title: 'Boston Guide',
      description: 'Navigate the city like a local',
      icon: MapPin,
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      stats: '25 neighborhoods',
      trend: '+3 this week',
      rating: 4.3,
      features: ['Live Transit', 'Safety Scores', 'Student Discounts']
    },
    {
      id: 'survival',
      title: 'Survival Tips',
      description: 'Insider hacks and essential advice',
      icon: Lightbulb,
      color: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      stats: '100+ tips',
      trend: '+15 this week',
      rating: 4.7,
      features: ['AI Assistant', 'Emergency Contacts', 'Quick Fixes']
    }
  ]

  const featuredContent = [
    {
      type: 'Dorm Spotlight',
      title: 'Warren Towers: The Complete Guide',
      rating: 3.8,
      excerpt: 'Everything you need to know about BU\'s most iconic freshman dorm...',
      badge: 'Popular',
      time: '2 days ago',
      views: 1247,
      likes: 89,
      category: 'housing',
      author: 'Sarah M.',
      readTime: '5 min read',
      image: '/api/placeholder/400/200'
    },
    {
      type: 'Professor Review',
      title: 'Professor Kupor (Questrom) - Student Favorite',
      rating: 4.7,
      excerpt: 'Incredibly helpful and flexible. Makes business courses actually engaging...',
      badge: 'Highly Rated',
      time: '1 week ago',
      views: 892,
      likes: 156,
      category: 'academics',
      author: 'Mike T.',
      readTime: '3 min read',
      image: '/api/placeholder/400/200'
    },
    {
      type: 'Food Review',
      title: 'Quan\'s Kitchen: Best Late-Night Bite',
      rating: 4.2,
      excerpt: 'Open until 2am and actually good. Perfect for those study sessions...',
      badge: 'Late Night',
      time: '3 days ago',
      views: 634,
      likes: 78,
      category: 'food',
      author: 'Alex K.',
      readTime: '4 min read',
      image: '/api/placeholder/400/200'
    },
    {
      type: 'Trending',
      title: 'Green Line Survival Guide 2024',
      rating: 4.5,
      excerpt: 'Everything you need to know about BU\'s lifeline to the city...',
      badge: 'Essential',
      time: '1 day ago',
      views: 2156,
      likes: 234,
      category: 'boston',
      author: 'Emma L.',
      readTime: '7 min read',
      image: '/api/placeholder/400/200'
    }
  ]

  const liveStats = [
    { label: 'Active Students', value: '2,847', change: '+127', icon: Users },
    { label: 'Reviews Today', value: '23', change: '+8', icon: MessageSquare },
    { label: 'Avg Response Time', value: '2.3min', change: '-0.5min', icon: Clock },
    { label: 'Satisfaction Rate', value: '94.2%', change: '+1.2%', icon: Heart }
  ]

  const quickActions = [
    { label: 'Find Roommate', icon: Users, color: 'bg-blue-500' },
    { label: 'Rate Professor', icon: Star, color: 'bg-yellow-500' },
    { label: 'Report Issue', icon: Zap, color: 'bg-red-500' },
    { label: 'Get Help', icon: Lightbulb, color: 'bg-green-500' }
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-current star-rating" />)
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-current star-rating opacity-50" />)
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)
    }
    
    return stars
  }

  const filteredContent = featuredContent.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center pulse-glow">
                <span className="text-primary-foreground font-bold text-lg">BU</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">GuideToBU</span>
                <div className="text-xs text-muted-foreground">Live • {currentTime.toLocaleTimeString()}</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#housing" className="text-foreground hover:text-primary transition-colors font-medium">Housing</a>
              <a href="#academics" className="text-foreground hover:text-primary transition-colors font-medium">Academics</a>
              <a href="#food" className="text-foreground hover:text-primary transition-colors font-medium">Food</a>
              <a href="#social" className="text-foreground hover:text-primary transition-colors font-medium">Social</a>
              <a href="#boston" className="text-foreground hover:text-primary transition-colors font-medium">Boston</a>
              <a href="#survival" className="text-foreground hover:text-primary transition-colors font-medium">Tips</a>
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Favorites
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t slide-in-up">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <a href="#housing" className="block py-2 text-foreground hover:text-primary font-medium">Housing</a>
              <a href="#academics" className="block py-2 text-foreground hover:text-primary font-medium">Academics</a>
              <a href="#food" className="block py-2 text-foreground hover:text-primary font-medium">Food</a>
              <a href="#social" className="block py-2 text-foreground hover:text-primary font-medium">Social</a>
              <a href="#boston" className="block py-2 text-foreground hover:text-primary font-medium">Boston</a>
              <a href="#survival" className="block py-2 text-foreground hover:text-primary font-medium">Tips</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="slide-in-up">
            <h1 className="hero-title font-bold mb-6 text-white">
              The Ultimate Guide to BU
            </h1>
            <p className="hero-subtitle mb-8 opacity-90 max-w-3xl mx-auto">
              Real-time insights, interactive features, and honest reviews from the BU community. 
              Make smarter decisions about housing, academics, dining, and campus life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 font-semibold">
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Analytics
              </Button>
            </div>
          </div>
          
          {/* Live Stats Bar */}
          <div className="fade-in-delay">
            <div className="glassmorphism rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {liveStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <IconComponent className="w-5 h-5 mr-2" />
                        <span className="text-2xl font-bold">{stat.value}</span>
                        <span className="text-green-300 text-sm ml-2">{stat.change}</span>
                      </div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search Bar */}
      <section className="bg-white py-8 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search dorms, professors, restaurants, tips, or ask anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-16 py-4 text-lg border-2 border-gray-200 focus:border-primary rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6">
                <Zap className="w-4 h-4 mr-2" />
                AI Search
              </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 justify-center">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 transition-transform"
                  >
                    <div className={`w-4 h-4 rounded-full ${action.color} mr-2`}></div>
                    <IconComponent className="w-4 h-4 mr-2" />
                    {action.label}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Interactive BU Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore real-time data, interactive maps, and comprehensive analytics
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="maps">Maps</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="search">Search</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <LiveStatsDashboard />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <DormRatingsChart />
                <AcademicPerformanceChart />
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SocialLifePieChart />
                <TransportationRadarChart />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TrendsLineChart />
                <DiningComparisonChart />
              </div>
            </TabsContent>

            <TabsContent value="maps" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <InteractiveMap type="campus" />
                <InteractiveMap type="boston" />
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-8">
              <ActivityFeed />
            </TabsContent>

            <TabsContent value="search" className="space-y-8">
              <AdvancedSearch />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Navigation Cards */}
      <section className="py-16 interactive-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore BU</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides powered by real student experiences and live data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navigationCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <Card key={card.id} className="card-hover cursor-pointer group overflow-hidden border-0 shadow-lg">
                  <div className={`h-2 ${card.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-xl ${card.color} text-white feature-icon`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="group-hover:text-primary transition-colors text-lg">
                            {card.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              {renderStars(card.rating)}
                            </div>
                            <span className="text-sm font-medium">{card.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {card.trend}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base mb-4">
                      {card.description}
                    </CardDescription>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{card.stats}</span>
                        <Badge variant="outline">{card.trend}</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Features:</div>
                        <div className="flex flex-wrap gap-1">
                          {card.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Latest Reviews & Guides</h2>
              <p className="text-xl text-muted-foreground">Fresh insights from the BU community</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <select 
                  value={activeFilter} 
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  <option value="all">All Categories</option>
                  <option value="housing">Housing</option>
                  <option value="academics">Academics</option>
                  <option value="food">Food</option>
                  <option value="boston">Boston</option>
                </select>
              </div>
              <Button variant="outline">
                View All
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredContent.map((item, index) => (
              <Card key={index} className="card-hover cursor-pointer overflow-hidden border-0 shadow-lg">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm">Interactive Preview</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={
                      item.badge === 'Popular' ? 'bg-blue-500' :
                      item.badge === 'Highly Rated' ? 'bg-green-500' :
                      item.badge === 'Late Night' ? 'bg-purple-500' :
                      'bg-orange-500'
                    }>
                      {item.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{item.type}</Badge>
                        <span className="text-sm text-muted-foreground">by {item.author}</span>
                      </div>
                      <CardTitle className="text-lg mb-2 line-clamp-2">{item.title}</CardTitle>
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-1">
                          {renderStars(item.rating)}
                          <span className="text-sm font-medium ml-1">{item.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{item.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{item.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by the BU Community</h2>
            <p className="text-xl text-muted-foreground">Real data, real impact</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2,847', label: 'Active Students', icon: Users, color: 'text-blue-500' },
              { value: '1,247', label: 'Reviews Published', icon: MessageSquare, color: 'text-green-500' },
              { value: '89', label: 'Professors Rated', icon: GraduationCap, color: 'text-purple-500' },
              { value: '94.2%', label: 'Satisfaction Rate', icon: Award, color: 'text-orange-500' }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">BU</span>
                </div>
                <span className="text-2xl font-bold">GuideToBU</span>
              </div>
              <p className="text-gray-400 mb-4">
                The ultimate guide to Boston University, powered by real student experiences and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Follow
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#housing" className="hover:text-white transition-colors flex items-center"><Building className="w-4 h-4 mr-2" />Housing</a></li>
                <li><a href="#academics" className="hover:text-white transition-colors flex items-center"><GraduationCap className="w-4 h-4 mr-2" />Academics</a></li>
                <li><a href="#food" className="hover:text-white transition-colors flex items-center"><UtensilsCrossed className="w-4 h-4 mr-2" />Food & Dining</a></li>
                <li><a href="#social" className="hover:text-white transition-colors flex items-center"><Users className="w-4 h-4 mr-2" />Social Life</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><Sparkles className="w-4 h-4 mr-2" />Submit Review</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><Zap className="w-4 h-4 mr-2" />Report Issue</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><MessageSquare className="w-4 h-4 mr-2" />Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><Award className="w-4 h-4 mr-2" />About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Get the latest reviews, tips, and BU news</p>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-gray-800 border-gray-700 text-white flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    <Sparkles className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-xs text-gray-500">
                  Join 2,847+ students getting weekly updates
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 GuideToBU. Made with ❤️ by BU students, for BU students.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Powered by</span>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">AI Technology</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg z-50 pulse-glow"
          size="sm"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}

export default App

