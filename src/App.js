import React, { Component } from "react";
import axios from "axios";

import { FlatButton, Paper, TextField } from "material-ui";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      password: "",
      message: "",
    };
  }

  render() {
    const { account, password, message } = this.state;

    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 500 }}>
        <Paper style={{ padding: 10, width: 400, height: 250 }}>
          <TextField
            value={account}
            onChange={(event, newValue) => {
              this.setState({
                account: newValue,
              });
            }}
            hintText="Адрес кошелька"
          />
          <TextField
            type={"password"}
            value={password}
            onChange={(event, newValue) => {
              this.setState({
                password: newValue,
              });
            }}
            hintText="Пароль"
          />
          <TextField
            value={message}
            onChange={(event, newValue) => {
              this.setState({
                message: newValue,
              });
            }}
            hintText="Новое сообщение для Hello"
          />
          <FlatButton
            onClick={() => {
              axios
                .post("http://localhost:8000", {
                  account,
                  password,
                  message,
                })
                .then(function(response) {
                  alert(response);
                });
            }}
            primary={true}
            label="Изменить Hello"
          />
        </Paper>
      </div>
    );
  }
}

export default App;
