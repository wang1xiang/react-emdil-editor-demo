##### 引入方式

```
npm install react-email-editor
```

https://codesandbox.io/s/practical-mclean-infryz

##### 数据格式

```json
{
  "counters": {
    "u_row": 13,
    "u_column": 16,
    "u_content_menu": 3,
    "u_content_text": 11,
    "u_content_image": 3,
    "u_content_button": 4,
    "u_content_social": 1,
    "u_content_divider": 6
  },
  "body": {
    "id": "33FuZvUBG1",
    "rows": [
      {
        "id": "JVZ-uGz5jQ",
        "cells": [1],
        "columns": [
          {
            "id": "xRLJTwgdpD",
            "contents": [
              {
                "id": "7AqmMduqrs",
                "type": "divider",
                "values": {
                  "width": "100%",
                  "border": {
                    "borderTopWidth": "0px",
                    "borderTopStyle": "solid",
                    "borderTopColor": "#BBBBBB"
                  },
                  "textAlign": "center",
                  "containerPadding": "5px",
                  "anchor": "",
                  "hideDesktop": false,
                  "displayCondition": null,
                  "_meta": {
                    "htmlID": "u_content_divider_6",
                    "htmlClassNames": "u_content_divider"
                  },
                  "selectable": true,
                  "draggable": true,
                  "duplicatable": true,
                  "deletable": true,
                  "hideable": true,
                  "hideMobile": false
                }
              }
            ],
            "values": {
              "_meta": {
                "htmlID": "u_column_16",
                "htmlClassNames": "u_column"
              },
              "border": {},
              "padding": "0px",
              "backgroundColor": ""
            }
          }
        ],
        "values": {
          "displayCondition": null,
          "columns": false,
          "backgroundColor": "",
          "columnsBackgroundColor": "",
          "backgroundImage": {
            "url": "",
            "fullWidth": true,
            "repeat": false,
            "center": true,
            "cover": false
          },
          "padding": "0px",
          "anchor": "",
          "hideDesktop": false,
          "_meta": {
            "htmlID": "u_row_13",
            "htmlClassNames": "u_row"
          },
          "selectable": true,
          "draggable": true,
          "duplicatable": true,
          "deletable": true,
          "hideable": true,
          "hideMobile": false,
          "noStackMobile": false
        }
      }
    ],
    "values": {
      "popupPosition": "center",
      "popupWidth": "600px",
      "popupHeight": "auto",
      "borderRadius": "10px",
      "contentAlign": "center",
      "contentVerticalAlign": "center",
      "contentWidth": "600px",
      "fontFamily": {
        "label": "Montserrat",
        "value": "'Montserrat',sans-serif",
        "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
        "defaultFont": true
      },
      "textColor": "#000000",
      "popupBackgroundColor": "#FFFFFF",
      "popupBackgroundImage": {
        "url": "",
        "fullWidth": true,
        "repeat": false,
        "center": true,
        "cover": true
      },
      "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
      "popupCloseButton_position": "top-right",
      "popupCloseButton_backgroundColor": "#DDDDDD",
      "popupCloseButton_iconColor": "#000000",
      "popupCloseButton_borderRadius": "0px",
      "popupCloseButton_margin": "0px",
      "popupCloseButton_action": {
        "name": "close_popup",
        "attrs": {
          "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
        }
      },
      "backgroundColor": "#e8d4bb",
      "backgroundImage": {
        "url": "",
        "fullWidth": true,
        "repeat": false,
        "center": true,
        "cover": false
      },
      "preheaderText": "",
      "linkStyle": {
        "body": true,
        "linkColor": "#0000ee",
        "linkHoverColor": "#0000ee",
        "linkUnderline": true,
        "linkHoverUnderline": true
      },
      "_meta": {
        "htmlID": "u_body",
        "htmlClassNames": "u_body"
      }
    }
  },
  "schemaVersion": 8
}
```

和之前变动较大

##### 高级组件

social、video 等属于高级组件，需要付费才可使用

不同版本自定义组件限制不同

不知道算不算自定义组件？

##### 组件注册

1. 通过[编辑器注册](https://dashboard.unlayer.com/projects/88604/design/tools)，没有对应文档

2. 通过代码编写方式，需要开启高级功能

   https://github.com/unlayer/react-email-editor/issues/105

##### 难度

1. 纯[英文文档](https://docs.unlayer.com/docs)
2. [免费版本限制](https://dashboard.unlayer.com/projects/88604/settings/billing)，很多 API 和自定义东西都没法使用，没有试用版

##### 预计时间

1. 购买日期开始，目前不知道什么时候能购买
2. 基础使用，引入项目+初始化操作 2-3 天
3. 自定义组件使用 预计 4 天
4. 修改 text 组件，添加属性和自定义字段等内容 预计 3 天
5. 数据结构 与后端联调接口等 预计 3 天
