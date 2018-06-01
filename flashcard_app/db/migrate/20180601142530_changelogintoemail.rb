class Changelogintoemail < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :login, :email
  end
end
