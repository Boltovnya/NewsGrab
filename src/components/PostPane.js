import React from "react";
import { Tab } from "semantic-ui-react";
import Posts from "./Posts";

export default function PostPane(props) {
  const panes = [
    {
      menuItem: "Top US",
      render: () => (
        <Tab.Pane>
          <Posts type="us" />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Top UK",
      render: () => (
        <Tab.Pane>
          <Posts type="gb" />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Top ZA",
      render: () => (
        <Tab.Pane>
          <Posts type="za" />
        </Tab.Pane>
      )
    }
  ];

  return (
    <div>
      <Tab panes={panes} renderActiveOnly={true} />
    </div>
  );
}
