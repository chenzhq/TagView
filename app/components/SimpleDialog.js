import React from 'react';
import Typography from 'material-ui/Typography';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import blue from 'material-ui/colors/blue';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>
          <List>
            {emails.map(email => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(email)}
                key={email}
              >
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
            <ListItem
              button
              onClick={() => this.handleListItemClick('addAccount')}
            >
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

export default SimpleDialog;
