import React from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

// todo:修复样式和Key的问题。

/*
要求数据结构是如下的json格式,
const testData = [
  {
    content: 'nanfang',
    child: [
      {
        content: 'guangdong',
        child: [
          {
            content: 'guangzhou',
          },
        ],
      },
      {
        content: 'guangxi',
      },
    ],
  },
  {
    content: 'beifang',
    child: [
      {
        content: 'beijing',
      },
      {
        content: 'shanghai',
      },
    ],
  },
];
 */
function structure(MenuData) {
  return MenuData.child ?
    <SubMenu title={<span>{MenuData.content}</span>}>
      { MenuData.child.map(structure) }
    </SubMenu> :
    <Menu.Item>{MenuData.content}</Menu.Item>;
}
function MakeMenu(MenuJSONData) {
  return (
    <Menu mode="inline">
      {MenuJSONData.map(structure)}
    </Menu>
  );
}

export default MakeMenu;
