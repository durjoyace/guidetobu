import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const COLORS = ['#CC0000', '#F39C12', '#27AE60', '#3498DB', '#9B59B6', '#E74C3C']

// Sample data for visualizations
const dormRatingsData = [
  { name: 'Warren Towers', rating: 3.8, reviews: 127, price: 15800 },
  { name: 'West Campus', rating: 4.2, reviews: 89, price: 16200 },
  { name: 'Brownstones', rating: 3.9, reviews: 76, price: 17500 },
  { name: 'Towers', rating: 3.6, reviews: 94, price: 15600 },
  { name: 'Stuvi 2', rating: 4.5, reviews: 45, price: 18900 },
  { name: 'Kilachand', rating: 4.1, reviews: 38, price: 16800 }
]

const academicData = [
  { school: 'Questrom', avgRating: 4.2, difficulty: 3.8, professors: 23 },
  { school: 'COM', avgRating: 4.0, difficulty: 3.5, professors: 18 },
  { school: 'ENG', avgRating: 3.9, difficulty: 4.2, professors: 31 },
  { school: 'CAS', avgRating: 3.8, difficulty: 3.9, professors: 45 },
  { school: 'CGS', avgRating: 4.1, difficulty: 3.2, professors: 12 },
  { school: 'SAR', avgRating: 3.7, difficulty: 4.0, professors: 15 }
]

const diningData = [
  { name: 'West Campus', rating: 4.1, price: 3, hours: '7am-11pm' },
  { name: 'Warren Dining', rating: 3.6, price: 3, hours: '7am-10pm' },
  { name: 'GSU Food Court', rating: 3.8, price: 2, hours: '8am-9pm' },
  { name: 'Marciano Commons', rating: 3.9, price: 3, hours: '7am-10pm' },
  { name: 'Granby Commons', rating: 3.7, price: 3, hours: '7am-9pm' }
]

const socialLifeData = [
  { category: 'Greek Life', participation: 14, satisfaction: 4.2 },
  { category: 'Sports Clubs', participation: 28, satisfaction: 4.5 },
  { category: 'Academic Clubs', participation: 45, satisfaction: 4.1 },
  { category: 'Cultural Orgs', participation: 32, satisfaction: 4.3 },
  { category: 'Service Groups', participation: 38, satisfaction: 4.4 },
  { category: 'Arts & Music', participation: 22, satisfaction: 4.0 }
]

const transportationData = [
  { line: 'Green Line B', reliability: 3.2, crowding: 4.1, frequency: 3.8 },
  { line: 'Bus Routes', reliability: 3.6, crowding: 3.4, frequency: 3.5 },
  { line: 'Walking', reliability: 4.8, crowding: 1.0, frequency: 5.0 },
  { line: 'Biking', reliability: 4.2, crowding: 1.5, frequency: 4.5 },
  { line: 'Uber/Lyft', reliability: 4.0, crowding: 2.0, frequency: 4.2 }
]

const monthlyTrendsData = [
  { month: 'Sep', reviews: 45, satisfaction: 4.1, activity: 85 },
  { month: 'Oct', reviews: 67, satisfaction: 4.0, activity: 92 },
  { month: 'Nov', reviews: 89, satisfaction: 3.9, activity: 78 },
  { month: 'Dec', reviews: 34, satisfaction: 4.2, activity: 45 },
  { month: 'Jan', reviews: 78, satisfaction: 3.8, activity: 88 },
  { month: 'Feb', reviews: 92, satisfaction: 4.0, activity: 95 },
  { month: 'Mar', reviews: 76, satisfaction: 4.1, activity: 89 },
  { month: 'Apr', reviews: 85, satisfaction: 4.2, activity: 94 },
  { month: 'May', reviews: 56, satisfaction: 4.3, activity: 67 }
]

export const DormRatingsChart = () => (
  <div className="chart-container rounded-xl p-6">
    <h3 className="text-xl font-bold mb-4 text-center">Dorm Ratings vs Price</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={dormRatingsData}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 12 }} />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            border: 'none', 
            borderRadius: '8px',
            color: 'white'
          }} 
        />
        <Bar yAxisId="left" dataKey="rating" fill="#CC0000" name="Rating" />
        <Bar yAxisId="right" dataKey="price" fill="#F39C12" name="Price ($)" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export const AcademicPerformanceChart = () => (
  <div className="chart-container rounded-xl p-6">
    <h3 className="text-xl font-bold mb-4 text-center">Academic Performance by School</h3>
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={academicData}>
        <PolarGrid stroke="rgba(255,255,255,0.2)" />
        <PolarAngleAxis dataKey="school" tick={{ fontSize: 12 }} />
        <PolarRadiusAxis angle={90} domain={[0, 5]} tick={{ fontSize: 10 }} />
        <Radar name="Rating" dataKey="avgRating" stroke="#27AE60" fill="#27AE60" fillOpacity={0.3} />
        <Radar name="Difficulty" dataKey="difficulty" stroke="#E74C3C" fill="#E74C3C" fillOpacity={0.3} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            border: 'none', 
            borderRadius: '8px',
            color: 'white'
          }} 
        />
      </RadarChart>
    </ResponsiveContainer>
  </div>
)

export const SocialLifePieChart = () => (
  <div className="chart-container rounded-xl p-6">
    <h3 className="text-xl font-bold mb-4 text-center">Student Organization Participation</h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={socialLifeData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, participation }) => `${name}: ${participation}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="participation"
        >
          {socialLifeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            border: 'none', 
            borderRadius: '8px',
            color: 'white'
          }} 
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

export const TransportationRadarChart = () => (
  <div className="chart-container rounded-xl p-6">
    <h3 className="text-xl font-bold mb-4 text-center">Transportation Options Analysis</h3>
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={transportationData}>
        <PolarGrid stroke="rgba(255,255,255,0.2)" />
        <PolarAngleAxis dataKey="line" tick={{ fontSize: 12 }} />
        <PolarRadiusAxis angle={90} domain={[0, 5]} tick={{ fontSize: 10 }} />
        <Radar name="Reliability" dataKey="reliability" stroke="#3498DB" fill="#3498DB" fillOpacity={0.3} />
        <Radar name="Frequency" dataKey="frequency" stroke="#27AE60" fill="#27AE60" fillOpacity={0.3} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            border: 'none', 
            borderRadius: '8px',
            color: 'white'
          }} 
        />
      </RadarChart>
    </ResponsiveContainer>
  </div>
)

export const TrendsLineChart = () => (
  <div className="chart-container rounded-xl p-6">
    <h3 className="text-xl font-bold mb-4 text-center">Monthly Trends & Activity</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={monthlyTrendsData}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 12 }} />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            border: 'none', 
            borderRadius: '8px',
            color: 'white'
          }} 
        />
        <Line yAxisId="left" type="monotone" dataKey="reviews" stroke="#CC0000" strokeWidth={3} name="Reviews" />
        <Line yAxisId="left" type="monotone" dataKey="satisfaction" stroke="#F39C12" strokeWidth={3} name="Satisfaction" />
        <Line yAxisId="right" type="monotone" dataKey="activity" stroke="#27AE60" strokeWidth={3} name="Activity %" />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export const DiningComparisonChart = () => (
  <div className="chart-container rounded-xl p-6">
    <h3 className="text-xl font-bold mb-4 text-center">Dining Hall Ratings</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={diningData} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis type="number" domain={[0, 5]} tick={{ fontSize: 12 }} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            border: 'none', 
            borderRadius: '8px',
            color: 'white'
          }} 
        />
        <Bar dataKey="rating" fill="#9B59B6" name="Rating" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

