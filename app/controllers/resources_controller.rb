class ResourcesController < ApplicationController
  before_action :set_resource, only: [:show, :update, :destroy]

  # GET /resources
  def index
   
    @artist = Artist.find(params[:artist_id])
    @resources = Resource.where(artist_id: @artist.id).all

    render json: @resources
  end

  # GET /resources/1
  def show
    @artist = Artist.find(params[:artist_id])
    @resources = Resource.where(artist_id: @artist.id).all

    render json: @resource
  end

# Adding Resources
def create
  @resource = Resource.new(resource_params)
  @artist = Artist.find(params[:artist_id])

  @artist.resources << @resource

  if @resource.save
    render json: @resource, status: :created
  else
    render json: @resource.errors, status: :unprocessable_entity
  end
end
  
  # PATCH/PUT /resources/1
  def update
    if @resource.update(resource_params)
      render json: @resource
    else
      render json: @resource.errors, status: :unprocessable_entity
    end
  end

  # DELETE /resources/1
def destroy 
  @resource.destroy
end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resource
      @resource = Resource.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def resource_params
      params.require(:resource).permit(:name, :link, :artist_id)
    end
end
