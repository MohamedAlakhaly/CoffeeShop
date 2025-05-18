
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface cardProps{
  cardTitle:string,
  cardSubTitle:string,
  cardIcon:LucideIcon
}
const ServicesCard =({cardTitle,cardSubTitle,cardIcon:Icon} :cardProps) => {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg relative group hover:bg-[#222] transition">
    <div className="text-orange-400 mb-4">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{cardTitle}</h3>
    <p className="text-gray-400 mb-4">
      {cardSubTitle}
    </p>
    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
  )
}

export default ServicesCard