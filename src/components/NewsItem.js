import React from "react";
import { Item } from "semantic-ui-react";

export function NewsItem(props) {
  console.log(props);
  return (
    <Item>
      <Item.Image size="tiny" src={props.img} />

      <Item.Content>
        <Item.Header as="a" href={props.url}>
          {props.title}
        </Item.Header>
        <Item.Meta>{props.author}</Item.Meta>
        <Item.Description>{props.body}</Item.Description>
        <Item.Extra>Published at {props.date}</Item.Extra>
      </Item.Content>
    </Item>
  );
}
