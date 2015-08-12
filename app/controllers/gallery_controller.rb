class GalleryController < ApplicationController
  def index
    get_my_gallery = Gallery.where(:user_id => current_user.id.to_i).order(created_at: :desc)
    render :json => {gallery: get_my_gallery}
  end

  def store
    gallery = Gallery.new
    gallery.image = params[:file]
    gallery.user_id = current_user.id.to_i
    if gallery.save
      render :json => {status: "success",message: "file(s) uploaded successfull to user",image: gallery}
    else
      render :josn => {status: "failed", message: "file(s) uploaded failed"}
    end
  end

  def update_details
    image = params
    gallery = Gallery.find(image[:id])
    gallery.update(gallery_params)
    render :json =>{status:"success"}
  end

  def delete
    image_id = params[:id]
    image    = params[:image]
    puts "#"*100
    puts image[:id].inspect
    puts "*"*100
    if image[:user_id].to_i == current_user.id.to_i
      deleteImage = Gallery.find(image[:id])
      if deleteImage.destroy
        render :json => {status:"success",message:"image with id #{image[:id]} deleted"}
      else
        render :json => {status:"failed", message:"image with id #{image[:id]} can't delete"}
      end
    else
      render :json => {status: "failed", message:"You haven't permission to delete this image"}
    end
  end

  private
  def gallery_params
    params.require(:gallery).permit(:title,:description,:user_id,:album_id,:image)
  end
end
