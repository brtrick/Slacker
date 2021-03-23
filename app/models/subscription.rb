# == Schema Information
#
# Table name: subscriptions
#
#  id                :bigint           not null, primary key
#  subscriber_id     :bigint           not null
#  subscribable_type :string           not null
#  subscribable_id   :bigint           not null
#  admin             :boolean          default(FALSE), not null
#  pending           :boolean          default(FALSE), not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Subscription < ApplicationRecord
    validates :subscriber_id, :subscribable_type, :subscribable_id, presence: true
    validates :admin, :pending, inclusion: {in: [true, false]}
    validates :subscriber_id, uniqueness: {scope: [:subscribable_id, :subscribable_type],
        message: "is already subscribed."}

    belongs_to :subscriber,
        class_name: :User

    belongs_to :subscribable, polymorphic: true

    scope :admin, -> {where(admin: true)}
    scope :pending, -> {where(pending: true)}
    scope :active, -> {where(pending: false)}
end
