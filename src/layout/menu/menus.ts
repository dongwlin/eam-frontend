import {Home, Task, CloudLogging, Settings, Information} from "@vicons/carbon"
import { Component } from "vue"

interface Menu {
  key: string
  to: string
  icon: Component
}

const menus: Menu[] = [
  {
    key: 'overview',
    to: '/overview',
    icon: Home
  },
  {
    key: 'tasker',
    to: '/tasker',
    icon: Task
  },
  {
    key: 'log',
    to: '/log',
    icon: CloudLogging
  },
  {
    key: 'settings',
    to: '/settings',
    icon: Settings
  },
  {
    key: 'about',
    to: '/about',
    icon: Information
  }
]

export default menus