import React, { useState } from "react";

import { List, ListItem } from "@material-ui/core";
import { unfold } from "ramda";

const ListCard = () => {
  const [items] = useState(() =>
    unfold((n) => (n > 100 ? false : [n, n + 1]), 0)
  );
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  );
};

export default ListCard;
