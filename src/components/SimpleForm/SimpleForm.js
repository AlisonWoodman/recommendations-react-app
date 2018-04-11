import React, { Component } from 'react';
import fire from '../../fire';

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentWillMount(){
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  addMessage = (e) => {
    e.preventDefault();
    const message = this.text.value
    if (message.length) {
      this.saveMessage(message)
    };
  }

  saveMessage = (message) => {
    fire.database().ref('messages').push(message);
    this.text.value = ''
  }

  render() {
    return (
    <form onSubmit={this.addMessage}>
      <input type="text" ref={ el => this.text = el }/>
      <input type="submit"/>
      <ul>
        {
          this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
        }
      </ul>
    </form>
    )
  }
}

export default SimpleForm;
