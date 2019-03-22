class AddContactToApartments < ActiveRecord::Migration[5.2]
  def change
    add_column :apartments, :contact, :string
    add_column :apartments, :phone, :string
    add_column :apartments, :address, :string
    add_column :apartments, :address2, :string
    add_column :apartments, :city, :string
    add_column :apartments, :state, :string
    add_column :apartments, :zip, :string
    add_column :apartments, :price, :integer
    add_column :apartments, :image_url, :string
  end
end
