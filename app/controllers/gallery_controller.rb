class GalleryController < ApplicationController
  def index
  end

  def store
    gallery = Gallery.new
    gallery.image = params[:file]
    gallery.save

    render :json => {success: "message"}
  end

  def update
  end

  def delete
  end

  private
  def gallery_params
    params.require(:gallery).permit(:title,:description,:user_id,:album_id,:image)
  end
end
