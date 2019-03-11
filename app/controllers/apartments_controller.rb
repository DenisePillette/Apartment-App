class ApartmentsController < ApplicationController
  before_action :authenticate_user
  before_action :authorize_update, only: [:update, :destroy]

  def index
    apartments = Apartment.all
    render json: apartments, status: 200
  end

  def show
    apartment = Apartment.find params[:id]
    render json: apartment, status: 200
  end

  def create
    apartment = Apartment.new(apartment_params)
    if apartment.save
      payload = {
        apartment: apartment
      }
      render json: payload, status: 201
    else
      render json: {errors: apartment.errors}, status: 422
    end
  end

  def update
    apartment = Apartment.find(params[:id])
    if apartment.update(apartment_params)
      render json: apartment, status: 200
    end
  end

  def destroy
    apartment = Apartment.find(params[:id])
    if apartment.destroy
      apartment.deleted_at = Time.now
      render json: { msg: "Apartment has been deleted." }, status: 200
    end
  end

  private

  def apartment_params
    params.require(:new_apartment).permit(:user_id, :name)
  end

  def authorize_update
    apartment = Apartment.find(params[:id])
    render json: { msg: "Invalid user." }, status: 401 unless current_user && (current_user.is_admin? || current_user.id.to_s == apartment.user_id.to_s)
  end
end
