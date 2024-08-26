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
    key: 'settings',
    to: '/settings',
    icon: 'i-carbon-settings'
  }
]

export default menus