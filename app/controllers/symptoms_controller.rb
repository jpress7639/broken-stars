class SymptomsController < ApplicationController
  before_action :set_symptom, only: [:show, :destroy]

  # GET /symptoms
  def index
    @artist = Artist.find(params[:artist_id])

    @symptoms = Symptom.where(artist_id: @artist.id).all

    render json: @symptoms
  end

  # GET /symptoms/1
  def show
    render json: @symptom
  end

  # Adding Symptoms 
def create
  @symptom = Symptom.new(symptom_params)
  @artist = Artist.find(params[:artist_id])

  @artist.symptoms << @symptom

  if @symptom.save
    render json: @symptom, status: :created
  else
    render json: @symptom.errors, status: :unprocessable_entity
  end
end

# DELETE /symptoms/1
def destroy 
  @symptom.destroy
end

  private
#     # Use callbacks to share common setup or constraints between actions.
    def set_symptom
      @symptom = Symptom.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def symptom_params
      params.require(:symptom).permit(:name, :artist_id)
    end
end
