import React, { Component } from 'react';
import fire from './fire';

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
    console.log(this.text.value);
    e.preventDefault();
    if (this.text.value.length) {
      fire.database().ref('messages').push( this.text.value );
      this.text.value = ''
    };
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
