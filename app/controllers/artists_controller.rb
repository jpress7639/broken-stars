class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :update, :destroy]

  # GET /artists
  def index
    @artists = Artist.all

    render json: @artists include: symptoms
  end

  # GET /artists/1
  def show
    render json: @artist include: symptoms
  end

  # POST /artists
  def create
    @artist = Artist.new(artist_params)

    if @artist.save
      render json: @artist, status: :created, location: @artist
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /artists/1
  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /artists/1
  def destroy
    @artist.destroy
  end

# Adding Symptoms 
def add_symptom
  @symptom = Symptom.new(symptom_params)
  @artist = Artist.find(params[:id])

  @artist.symptoms << @symptom

  if @symptom.save
    render json: @symptom, status: :created, location: @symptom
  else
    render json: @symptom.errors, status: :unprocessable_entity
  end
end

# Adding Resources
def create
  @resource = Resource.new(resource_params)
  @artist = Artist.find(params[:artist_id])

  @artist.resources << @resource

  if @resource.save
    render json: @resource, status: :created, location: @resource
  else
    render json: @resource.errors, status: :unprocessable_entity
  end
end

# DELETE /symptoms/1
  def delete_symptom 
    @symptom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_artist
      @artist = Artist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def artist_params
      params.require(:artist).permit(:name, :profile_img, :years, :disorder, :work_example, :work_URL, :story)
    end
end
