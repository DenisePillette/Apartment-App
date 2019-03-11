class AddDeletedAtToApartments < ActiveRecord::Migration[5.2]
  def change
    add_column :apartments, :deleted_at, :datetime
    add_index :apartments, :deleted_at
  end
end
