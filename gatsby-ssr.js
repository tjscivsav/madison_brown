import React from "react"

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      key="widget"
      type="text/javascript"
      src="https://cdn.userway.org/widget.js"
    />,
    <noscript
      key="noscript"
      type="text/javascript"
      src="https://userway.org"
    />,
  ])
}
