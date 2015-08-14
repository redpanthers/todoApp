class AlbumController < ApplicationController
  def index
    uAlbums = Album.order(created_at: :desc).all
    userAlbums = []
    uAlbums.each do |album|
      fakealbum = {:id=>album.id, :name => album.name , :description => album.description,
      :user =>{:name => album.user.name},
      :count=> album.galleries.count }
      userAlbums.push(fakealbum)
    end
    render :json => {status:"success",userAlbums:userAlbums}
  end
  def create
    check_album_title = Album.where(:name => params[:album][:title]).count
    unless  check_album_title > 0
      album = Album.create(album_params)
      if album
        fakealbum = {:id=> album.id, :name => album.name, :description => album.description,
        :user => {:name => album.user.name},
        :count => album.galleries.count
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

  def add_to_album
    image_id = params[:image_id].to_i
    album_id = params[:album_id].to_i
    add_to_album = Gallery.find(image_id)
    add_to_album.album_id = album_id
    saved = add_to_album.save
    if saved
      image_count_in_album = Gallery.where(:album_id => album_id).count
      image_count = Album.find(album_id).galleries.count
      render :json => {status:"success", message:"gallery added",
                       image_count:image_count_in_album,
                       count: image_count
                      }
    else
      render :json  => {status: "failed"}
    end
  end

  def delete

  end

  private
  def album_params
    params.require(:album).permit(:name,:description,:user_id,:cover)
  end
end
