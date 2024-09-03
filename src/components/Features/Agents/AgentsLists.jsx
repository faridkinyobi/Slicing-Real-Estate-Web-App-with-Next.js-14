import React from 'react'
import AgentsCard from './AgentsCard'

export default function AgentsLists() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
    <AgentsCard/>
    <AgentsCard/>
    <AgentsCard/>
  </div>
  )
}
