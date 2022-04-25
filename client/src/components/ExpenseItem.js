import React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LetteredAvatar from "lettered-avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ReactTimeAgo from "react-time-ago";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ExpenseItem(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteExpense = () => {
    props.delete(props.expenseId);
    handleClose();
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Are you sure you want to delete this item?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>NO</Button>
          <Button onClick={deleteExpense}>YES</Button>
        </DialogActions>
      </Dialog>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={handleClickOpen} />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <LetteredAvatar name={props.category} />
          </Avatar>
        </ListItemAvatar>
        <Link
          to={`/update-expense/${props.expenseId}`}
          style={{ textDecoration: "none" }}
        >
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="h6"
                  // color="text.secondary"
                >
                  {props.title}
                </Typography>{" "}
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="h6"
                  color="red"
                >
                  {`-$${props.primary}`}
                </Typography>{" "}
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.category}
                </Typography>{" "}
                <Typography
                  sx={{ display: "block" }}
                  component="div"
                  variant="body3"
                  color="text.secondary"
                >
                  {`Notes: ${props.notes ? props.notes : "N.A"}`} <br />
                  <ReactTimeAgo date={props.date} locale="en-US" />
                </Typography>
              </React.Fragment>
            }
          />
        </Link>
      </ListItem>

      <Divider></Divider>
    </React.Fragment>
  );
}

export default ExpenseItem;
