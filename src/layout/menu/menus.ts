type Menu = {
  key: string
  to: string,
  icon: string
}

const menus: Menu[] = [
  {
    key: 'overview',
    to: '/overview',
    icon: 'i-carbon-home'
  },
  {
    key: 'tasker',
    to: '/tasker',
    icon: 'i-carbon-task'
  },
  {
    key: 'log',
    to: '/log',
    icon: 'i-carbon-cloud-logging'
  },
  {
    key: 'settings',
    to: '/settings',
    icon: 'i-carbon-settings'
  },
  {
    key: 'about',
    to: '/about',
    icon: 'i-carbon-information'
  }
]

export default menus