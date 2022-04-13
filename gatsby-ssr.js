import React from "react"

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      key="widget"
      aria-posinset="bottom-left"
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
