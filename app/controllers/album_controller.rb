class AlbumController < ApplicationController
  def create

  end

  def update

  end

  def delete

  end

  private
  def album_params
    params.require(:album).permit(:name,:description,:user_id)
  end
end
