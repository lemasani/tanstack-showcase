
import { Home, Form, type LucideIcon } from 'lucide-react'


export type sidebarItemsType = {
  title: string
  to: string
  icon: LucideIcon
}

export const sidebarItems: sidebarItemsType[] = [
  {
     title: 'Home',
     to: '/',
     icon: Home,
   },
   {
     title: 'Tanstack form',
     to: '/form',
     icon: Form,
   },
]