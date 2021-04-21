import React from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';

import styles from './index.less';

declare type BasicLayoutProps = {
  /** @name logo url */
  logo?: string;
  title?: string | {
    label: string,
    styles?: React.CSSProperties,
  }
  rightContentRender?: () => React.ReactNode | React.ReactNode;
}

const BasicHeader: React.FC<BasicLayoutProps> = (props: BasicLayoutProps) => {

  const {logo, title, rightContentRender} = props

  const label = typeof title === 'string' ? title : title?.label
  const titleStyle = typeof title !== 'string' && title?.styles || undefined

  return (
    <Layout.Header>
      <div className={classNames(styles['basic-header'], 'ant-pro-top-nav-header')} style={{ color: '#fff' }}>
        <div className='ant-pro-top-nav-header-main wide'>
          <div className='ant-pro-top-nav-header-main-left'>
            <div className='ant-pro-top-nav-header-logo'>
              <a>
                <img src={logo}/>
                <h1 style={titleStyle}>{label}</h1>
              </a>
            </div>
          </div>
          <div className='ant-pro-top-nav-header-menu'>

          </div>
          <div className='ant-pro-top-nav-header-right'>
            {typeof rightContentRender === 'function' ? rightContentRender() : rightContentRender}
          </div>
        </div>
      </div>
    </Layout.Header>
  )
}

export default BasicHeader;