FactoryBot.define do
  factory :channel do
    name { "MyString" }
    description { "MyText" }
    workspace { nil }
    private { false }
    dm { false }
  end
end
