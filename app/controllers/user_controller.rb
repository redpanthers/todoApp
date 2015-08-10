class UserController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :html,:json

  def update_user
    puts current_user.id.inspect
    puts params[:id].inspect
    if current_user.id.to_i == params[:id].to_i
      user = User.find(params[:id])
      user.name = params[:user][:name]
      user.username = params[:user][:username]
      user.phone = params[:user][:phone]
      user.age = params[:user][:age]
      updated = user.save
      if updated
        render :json =>{params: params, user: user, status: "success", message:"successfully updated"}
      else
        render :json =>{status: "failed", message: "Unknown error occured"}
      end



    else
      render :json =>{status: "failed", message: "You can't edit other users profile"}
    end

  end
  private
  def user_params
    params.require(:user).permit(:username,:age,:name,:phone,:email,:password,:userimage)
  end
  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :phone, :name, :age, :email, :password) }
  end
end
