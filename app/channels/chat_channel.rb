class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    puts 'chatchatchatchat'
    stream_from "chat_test"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
