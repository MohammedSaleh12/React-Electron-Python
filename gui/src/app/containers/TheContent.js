import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import {  CFade } from '@coreui/react'
import PerfectScrollbar from 'react-perfect-scrollbar'

// routes config
import routes from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    <main className="c-main my-0 my-0 px-0 py-0">
      {/* <CContainer fluid className="px-0 py-0"> */}
      <PerfectScrollbar>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </PerfectScrollbar>
      {/* </CContainer> */}
    </main>
  )
}

export default React.memo(TheContent)