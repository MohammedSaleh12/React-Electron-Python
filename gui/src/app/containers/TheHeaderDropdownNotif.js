import React from 'react'
import {

  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const TheHeaderDropdownNotif = () => {
  const username = sessionStorage.getItem('name')
  const userRole = sessionStorage.getItem('role')
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <ArrowDropDownCircleIcon />

        {/* <CBadge shape="pill" color="danger">{itemsCount}</CBadge> */}
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          {/* <strong>You have {itemsCount} notifications</strong> */}
        </CDropdownItem>
        <CDropdownItem><CIcon name="cil-user" className="mr-2 text-success" />{username}</CDropdownItem>

        <CDropdownItem><CIcon name="cil-chart-pie" className="mr-2 text-info" />{userRole}</CDropdownItem>

        <CDropdownItem> <AccountCircleIcon />logout</CDropdownItem>

      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownNotif