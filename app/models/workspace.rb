# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Workspace < ApplicationRecord
    validates :name, presence: true

    has_many :channels
    has_many :subscriptions, as: :subscribable

    has_many :subscribers,
        through: :subscriptions,
        source: :subscriber

    
end
