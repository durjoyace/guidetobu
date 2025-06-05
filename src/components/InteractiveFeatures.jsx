import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Wifi, 
  Car, 
  Users, 
  Coffee,
  Zap,
  Filter,
  Search,
  TrendingUp,
  BarChart3,
  Eye,
  ThumbsUp,
  MessageSquare,
  Calendar,
  Award,
  Target,
  Activity,
  Layers,
  Globe,
  Smartphone
} from 'lucide-react'

// Interactive Map Component (Simulated)
export const InteractiveMap = ({ type = 'campus' }) => {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [mapView, setMapView] = useState('satellite')

  const locations = {
    campus: [
      { id: 1, name: 'Warren Towers', x: 30, y: 40, rating: 3.8, type: 'dorm' },
      { id: 2, name: 'West Campus', x: 70, y: 30, rating: 4.2, type: 'dorm' },
      { id: 3, name: 'GSU', x: 50, y: 60, rating: 4.0, type: 'dining' },
      { id: 4, name: 'Questrom', x: 40, y: 50, rating: 4.3, type: 'academic' },
      { id: 5, name: 'COM', x: 60, y: 45, rating: 4.1, type: 'academic' },
      { id: 6, name: 'Fitness Center', x: 35, y: 70, rating: 4.4, type: 'recreation' }
    ],
    boston: [
      { id: 1, name: 'Fenway Park', x: 20, y: 30, rating: 4.8, type: 'attraction' },
      { id: 2, name: 'Newbury Street', x: 40, y: 40, rating: 4.5, type: 'shopping' },
      { id: 3, name: 'Harvard Square', x: 60, y: 20, rating: 4.6, type: 'area' },
      { id: 4, name: 'North End', x: 70, y: 50, rating: 4.7, type: 'dining' },
      { id: 5, name: 'Back Bay', x: 45, y: 55, rating: 4.4, type: 'area' },
      { id: 6, name: 'Cambridge', x: 65, y: 25, rating: 4.5, type: 'area' }
    ]
  }

  const currentLocations = locations[type] || locations.campus

  const getLocationColor = (locationType) => {
    const colors = {
      dorm: '#CC0000',
      dining: '#F39C12',
      academic: '#27AE60',
      recreation: '#3498DB',
      attraction: '#9B59B6',
      shopping: '#E74C3C',
      area: '#34495E'
    }
    return colors[locationType] || '#95A5A6'
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Interactive {type === 'campus' ? 'Campus' : 'Boston'} Map
            </CardTitle>
            <CardDescription>
              Click on locations to see detailed information and reviews
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant={mapView === 'satellite' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setMapView('satellite')}
            >
              <Globe className="w-4 h-4 mr-1" />
              Satellite
            </Button>
            <Button 
              variant={mapView === 'street' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setMapView('street')}
            >
              <Layers className="w-4 h-4 mr-1" />
              Street
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Map Background */}
          <div className={`w-full h-96 rounded-lg relative overflow-hidden ${
            mapView === 'satellite' 
              ? 'bg-gradient-to-br from-green-100 via-blue-50 to-gray-100' 
              : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
          }`}>
            {/* Grid overlay for street view */}
            {mapView === 'street' && (
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#666" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            )}
            
            {/* Location Markers */}
            {currentLocations.map((location) => (
              <div
                key={location.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                onClick={() => setSelectedLocation(location)}
              >
                <div 
                  className="w-6 h-6 rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-200 flex items-center justify-center"
                  style={{ backgroundColor: getLocationColor(location.type) }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {location.name}
                </div>
              </div>
            ))}
            
            {/* Selected Location Info */}
            {selectedLocation && (
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{selectedLocation.name}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="capitalize">
                        {selectedLocation.type}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-current text-yellow-500 mr-1" />
                        <span className="font-medium">{selectedLocation.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Click for detailed reviews, photos, and insider tips from BU students.
                    </p>
                  </div>
                  <Button size="sm" className="ml-4">
                    View Details
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Map Legend */}
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries({
              dorm: 'Dorms',
              dining: 'Dining',
              academic: 'Academic',
              recreation: 'Recreation',
              attraction: 'Attractions',
              shopping: 'Shopping',
              area: 'Areas'
            }).map(([type, label]) => (
              <div key={type} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getLocationColor(type) }}
                ></div>
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Real-time Activity Feed
export const ActivityFeed = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: 'review',
      user: 'Sarah M.',
      action: 'reviewed',
      target: 'Warren Towers',
      rating: 4,
      time: '2 minutes ago',
      content: 'Great location but can get noisy on weekends...'
    },
    {
      id: 2,
      type: 'tip',
      user: 'Mike T.',
      action: 'shared a tip about',
      target: 'Green Line',
      time: '5 minutes ago',
      content: 'Pro tip: Board at the back during rush hour!'
    },
    {
      id: 3,
      type: 'question',
      user: 'Alex K.',
      action: 'asked about',
      target: 'Questrom courses',
      time: '8 minutes ago',
      content: 'Anyone taken FE 551? How\'s the workload?'
    },
    {
      id: 4,
      type: 'update',
      user: 'System',
      action: 'updated',
      target: 'West Campus dining hours',
      time: '12 minutes ago',
      content: 'Now open until 11 PM on weekends!'
    }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new activity
      const newActivity = {
        id: Date.now(),
        type: ['review', 'tip', 'question', 'update'][Math.floor(Math.random() * 4)],
        user: ['Emma L.', 'John D.', 'Lisa W.', 'Chris P.'][Math.floor(Math.random() * 4)],
        action: 'just posted about',
        target: ['Stuvi 2', 'COM building', 'Allston dining', 'T accessibility'][Math.floor(Math.random() * 4)],
        time: 'just now',
        content: 'New update from the BU community...'
      }
      
      setActivities(prev => [newActivity, ...prev.slice(0, 9)])
    }, 15000) // New activity every 15 seconds

    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type) => {
    const icons = {
      review: Star,
      tip: Zap,
      question: MessageSquare,
      update: Activity
    }
    return icons[type] || Activity
  }

  const getActivityColor = (type) => {
    const colors = {
      review: 'text-yellow-500',
      tip: 'text-blue-500',
      question: 'text-green-500',
      update: 'text-purple-500'
    }
    return colors[type] || 'text-gray-500'
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Live Activity Feed
        </CardTitle>
        <CardDescription>
          Real-time updates from the BU community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {activities.map((activity) => {
            const IconComponent = getActivityIcon(activity.type)
            return (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-2 rounded-full bg-gray-100 ${getActivityColor(activity.type)}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">{activity.user}</span>
                    <span className="text-sm text-muted-foreground">{activity.action}</span>
                    <span className="font-medium text-sm text-primary">{activity.target}</span>
                    {activity.rating && (
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-current text-yellow-500 mr-1" />
                        <span className="text-xs">{activity.rating}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{activity.content}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{activity.time}</span>
                    <button className="hover:text-primary transition-colors">Reply</button>
                    <button className="hover:text-primary transition-colors">Like</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

// Advanced Search with Filters
export const AdvancedSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    category: 'all',
    rating: 'all',
    price: 'all',
    distance: 'all'
  })
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'housing', label: 'Housing & Dorms' },
    { value: 'academics', label: 'Academics' },
    { value: 'dining', label: 'Food & Dining' },
    { value: 'social', label: 'Social Life' },
    { value: 'boston', label: 'Boston Area' },
    { value: 'tips', label: 'Tips & Hacks' }
  ]

  const mockResults = [
    {
      id: 1,
      title: 'Warren Towers Room 1205',
      category: 'housing',
      rating: 3.8,
      price: '$$$',
      distance: '0.2 miles',
      description: 'Spacious double with great views of the Charles River...',
      tags: ['freshman', 'social', 'central']
    },
    {
      id: 2,
      title: 'Professor Johnson (CS 112)',
      category: 'academics',
      rating: 4.5,
      price: 'N/A',
      distance: 'N/A',
      description: 'Excellent teacher, clear explanations, fair grading...',
      tags: ['computer science', 'beginner-friendly', 'helpful']
    },
    {
      id: 3,
      title: 'Quan\'s Kitchen',
      category: 'dining',
      rating: 4.2,
      price: '$$',
      distance: '0.5 miles',
      description: 'Best late-night Chinese food near campus...',
      tags: ['late-night', 'delivery', 'affordable']
    }
  ]

  const handleSearch = () => {
    setIsSearching(true)
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockResults.filter(result => 
        filters.category === 'all' || result.category === filters.category
      ))
      setIsSearching(false)
    }, 1000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Search className="w-5 h-5 mr-2" />
          Advanced Search
        </CardTitle>
        <CardDescription>
          Find exactly what you're looking for with smart filters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search dorms, professors, restaurants, tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <select 
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="w-full border rounded-lg px-3 py-2"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Rating</label>
              <select 
                value={filters.rating}
                onChange={(e) => setFilters({...filters, rating: e.target.value})}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="all">Any Rating</option>
                <option value="4+">4+ Stars</option>
                <option value="3+">3+ Stars</option>
                <option value="2+">2+ Stars</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Price Range</label>
              <select 
                value={filters.price}
                onChange={(e) => setFilters({...filters, price: e.target.value})}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="all">Any Price</option>
                <option value="$">$ - Budget</option>
                <option value="$$">$$ - Moderate</option>
                <option value="$$$">$$$ - Expensive</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Distance</label>
              <select 
                value={filters.distance}
                onChange={(e) => setFilters({...filters, distance: e.target.value})}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="all">Any Distance</option>
                <option value="0.5">Within 0.5 miles</option>
                <option value="1">Within 1 mile</option>
                <option value="2">Within 2 miles</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <Button 
            onClick={handleSearch} 
            className="w-full" 
            size="lg"
            disabled={isSearching}
          >
            {isSearching ? (
              <>
                <Activity className="w-4 h-4 mr-2 animate-spin" />
                Searching...
              </>
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Search with AI
              </>
            )}
          </Button>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-semibold">Search Results ({searchResults.length})</h4>
              {searchResults.map((result) => (
                <div key={result.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-medium">{result.title}</h5>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="capitalize">
                          {result.category}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-current text-yellow-500 mr-1" />
                          <span className="text-sm">{result.rating}</span>
                        </div>
                        {result.price !== 'N/A' && (
                          <span className="text-sm text-muted-foreground">{result.price}</span>
                        )}
                        {result.distance !== 'N/A' && (
                          <span className="text-sm text-muted-foreground">{result.distance}</span>
                        )}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{result.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {result.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Live Statistics Dashboard
export const LiveStatsDashboard = () => {
  const [stats, setStats] = useState({
    activeUsers: 2847,
    reviewsToday: 23,
    avgResponseTime: 2.3,
    satisfactionRate: 94.2,
    trendingTopic: 'Spring Housing Selection',
    newMembers: 127,
    questionsAnswered: 89,
    tipShares: 156
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        reviewsToday: prev.reviewsToday + (Math.random() > 0.7 ? 1 : 0),
        avgResponseTime: Math.max(1.0, prev.avgResponseTime + (Math.random() - 0.5) * 0.1),
        satisfactionRate: Math.min(100, Math.max(90, prev.satisfactionRate + (Math.random() - 0.5) * 0.5))
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const statCards = [
    {
      title: 'Active Students',
      value: stats.activeUsers.toLocaleString(),
      change: '+127',
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Reviews Today',
      value: stats.reviewsToday,
      change: '+8',
      icon: MessageSquare,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Avg Response Time',
      value: `${stats.avgResponseTime.toFixed(1)}min`,
      change: '-0.5min',
      icon: Clock,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Satisfaction Rate',
      value: `${stats.satisfactionRate.toFixed(1)}%`,
      change: '+1.2%',
      icon: Award,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from yesterday
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

