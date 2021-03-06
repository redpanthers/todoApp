class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :html,:json
  before_action :configure_permitted_parameters, if: :devise_controller?
  def index

  end

  def get_todo
    get_todo = ToDo.order(created_at: :desc).limit(10)
    render :json => {todo:get_todo}
  end

  def store_todo

    puts params[:home].inspect
    create_todo = ToDo.create(todo_params)
    if create_todo
      # fetch all data
      all_todo = ToDo.order(created_at: :desc).limit(10)
      render :json => {status: "success", data:create_todo, todo: all_todo}
    else
      render :json => {status: "failure"}
    end

  end

  private
  def todo_params
    params.require(:home).permit(:title,:description,:priority,:filetodo)
  end
  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :phone, :name, :age,:email,:password) }
  end
end
