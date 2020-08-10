class SymptomsController < ApplicationController
  before_action :set_symptom, only: [:show, :destroy]

  # GET /symptoms
  def index
    @symptoms = Symptom.all

    render json: @symptoms
  end

  # GET /symptoms/1
  def show
    render json: @symptom
  end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_symptom
#       @symptom = Symptom.find(params[:id])
#     end

#     # Only allow a trusted parameter "white list" through.
#     def symptom_params
#       params.require(:symptom).permit(:name, :artist_id)
#     end
# end
