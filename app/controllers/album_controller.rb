class AlbumController < ApplicationController
  def index
    uAlbums = Album.order(created_at: :desc).all
    userAlbums = []
    uAlbums.each do |album|
      fakealbum = {:name => album.name , :description => album.description,
      :user =>{:name => album.user.name}}
      userAlbums.push(fakealbum)
    end
    render :json => {status:"success",userAlbums:userAlbums}
  end
  def create
    check_album_title = Album.where(:name => params[:album][:title]).count
    unless  check_album_title > 0
      album = Album.create(album_params)
      if album
        fakealbum = {:name => album.name, :description => album.description,
        :user => {:name => album.user.name}
        }
        render :json  => {status:"success",album:fakealbum}
      else
        render :json => {status:"failed"}
      end
    else
      render :js => {status:"failed", message:"Album name already exist"}
    end
  end

  def update

  end

  def delete

  end

  private
  def album_params
    params.require(:album).permit(:name,:description,:user_id,:cover)
  end
end
