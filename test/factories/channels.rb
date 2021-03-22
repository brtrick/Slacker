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
FactoryBot.define do
  factory :channel do
    name { "MyString" }
    description { "MyText" }
    workspace { nil }
    private { false }
    dm { false }
  end
end
