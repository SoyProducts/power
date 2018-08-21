class StationInfosController < ApplicationController

  def index
    @stations = StationInfo.all
  end

  def show
    @station = StationInfo.find_by(id: params[:id])
    render json: { station: @station }
  end

  def create
    @station = StationInfo.new(station_params)
  end

  private

  def station_params
    params.require(:station).permit(:name)
  end
end
