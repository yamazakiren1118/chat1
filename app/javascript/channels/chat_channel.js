import consumer from "./consumer"

consumer.subscriptions.create({channel:"ChatChannel",room:"test"}, {
  connected() {
    // Called when the subscription is ready for use on the server

  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log('aaaa');
    var p = $("<p>");
    p.text(data['comment']);
    $('#chat').prepend(p);
    var chat = '<p>';
    chat += data['comment'];
    chat += '</p>'
    console.log(data['comment']);
    // console.log(data['comment']);
    // Called when there's incoming data on the websocket for this channel
  }
});
