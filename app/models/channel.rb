# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  description  :text
#  workspace_id :bigint           not null
#  private      :boolean          default(FALSE), not null
#  dm           :boolean          default(FALSE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  topic        :string
#
class Channel < ApplicationRecord
  validates :name, :workspace_id, presence: true
  validates :private, inclusion: {in: [true, false]}
  validates :dm, inclusion: {in: [true, false]}
  validates :name, uniqueness: {scope: :workspace_id}

  belongs_to :workspace

  has_many :subscriptions, as: :subscribable

  has_many :subscribers,
      through: :subscriptions,
      source: :subscriber

  scope :dm, -> {where(dm: true)}
  scope :private_channel, -> {where(private: true)}
  scope :alphabetized, -> {order("name ASC")}
end
