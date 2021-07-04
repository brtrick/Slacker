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

    has_many :channels,
        dependent: :destroy

    has_many :subscriptions, as: :subscribable,
        dependent: :destroy

    has_many :subscribers,
        through: :subscriptions,
        source: :subscriber

    
end
