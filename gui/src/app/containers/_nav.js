


export default [
  
  {
    _tag: 'CSidebarNavItem',
    name: 'POS',
    to: '/Pos',
    icon: 'cil-basket',
  
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/base',
    icon: 'cil-print',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Reports',
        to: '',
      },
    
 
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Setings',
    route: '',
    icon: 'cil-settings',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Table ',
        to: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Menu',
        to: '',
      },
 
    ],
  },
]
