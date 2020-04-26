import React from 'react'
import { Row, Col, Menu } from 'antd'
import { Link, Route } from 'react-router-dom'

import { lb, text } from '../i18n'

import { Setting } from '../pages/Setting'

const allRoute: {
  [key: string]: {
    parent?: string
    link: string
    icon?: string
    page: () => JSX.Element
  }
} = {
  [lb.linkIndex.setting]: {
    link: lb.link.setting,
    page: Setting,
  },
}

const allRouteKeys = Object.keys(allRoute)

function geneMenuItem(key: string) {
  const routeInfo = allRoute[key];
  const children = allRouteKeys.filter(k => allRoute[k].parent === key)

  if (routeInfo.parent !== undefined) {
    throw new Error('can not generate sub route as root menu')
  }

  if (children.length > 0) {
    return (
      <Menu.SubMenu
        key={key}
        title={text(key)}
      >
        {children.map(childrenKey => {
          return (
            <Menu.Item key={childrenKey}>
              <Link to={allRoute[childrenKey].link}>
                {allRoute[childrenKey].icon}{text(childrenKey)}
              </Link>
            </Menu.Item>
          )
        })}
      </Menu.SubMenu>
    )
  }

  return (
    <Menu.Item key={key}>
      <Link to={routeInfo.link}>
        {routeInfo.icon}
        {text(key)}
      </Link >
    </Menu.Item >
  )
}

export const BasicLayout = () => {

  return (
    <div>
      <Row>
        <Col>
          <Menu mode="horizontal">
            {allRouteKeys.filter(k => allRoute[k].parent === undefined).map(geneMenuItem)}
          </Menu>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ padding: 15 }}>
            <Route exact path={allRoute[lb.linkIndex.setting].link} component={allRoute[lb.linkIndex.setting].page} />
          </div>
        </Col>
      </Row>
    </div >
  )
}