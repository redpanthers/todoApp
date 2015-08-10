class UserController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :html,:json

  private
  def user_params
    params.require(:user).permit(:username,:age,:name,:phone,:email,:password)
  end
  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :phone, :name, :age, :email, :password) }
  end
end
