import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function PollItem(props) {
  return (
    <Grid container item spacing={2} xs={12} alignItems="center">
      <Grid item xs={10}>
        <div className="rounded text-center p-2 border-[1px] border-black">
          <p>{props.value}</p>
        </div>
      </Grid>
      <Grid item xs={2}>
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            props.deleteOption(props.index);
          }}
        >
          -
        </Button>
      </Grid>
    </Grid>
  );
}

function PollOptions(props) {
  const [listItems, setListItems] = React.useState([]);
  useEffect(() => {
    const data = props.data;
    const listItems = data.map((element, i) => (
      <PollItem
        key={i.toString()}
        value={element}
        deleteOption={props.deleteOption}
        index={i}
      />
    ));
    setListItems(listItems);
    console.log("listItems", listItems);
  }, [props.data]);

  return (
    <Grid container spacing={1}>
      {listItems}
    </Grid>
  );
}

export default PollOptions;
