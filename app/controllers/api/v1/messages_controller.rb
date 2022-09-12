class Api::V1::MessagesController < ApplicationController
  def index
    @content = Message.find(rand(1..Message.count))
    render json: @content
  end
end
