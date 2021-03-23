# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all
Subscription.destroy_all
User.destroy_all 
Channel.destroy_all 
Workspace.destroy_all 
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('channels')
ApplicationRecord.connection.reset_pk_sequence!('workspaces')
ApplicationRecord.connection.reset_pk_sequence!('subscriptions')
ApplicationRecord.connection.reset_pk_sequence!('messages')

User.create(full_name: 'Slacker Demo', display_name: 'Slacker', email: 'slacker@slacker.com', password: 'slacker')
User.create(full_name: 'Bradley Trick', display_name: 'Brad', email: 'brad@gmail.com', password: '1234567')
User.create(full_name: 'Joe Smith', display_name: 'Joe', email: 'jsmith@anderson.edu', password: '1234567')
User.create(full_name: 'Jon', display_name: '', email: 'jon@anderson.edu', password: '1234567')
User.create(full_name: 'Peter Bedragon', display_name: 'Pete', email: 'pbd@anderson.edu', password: '1234567')
User.create(full_name: 'Alexis Bryant', display_name: 'Alex', email: 'abryant@anderson.edu', password: '1234567')

Workspace.create(name: "AppAcademy")
Workspace.create(name: "Hood")
Workspace.create(name: "Medical Svcs")
Workspace.create(name: "Anderson University")

Channel.create(name:"general", description:"General Channel", workspace_id: 1, private: false, dm: false)
Channel.create(name:"2020 cohorts", description:"", workspace_id: 1, private: false, dm: false)
Channel.create(name:"Final Projects", description:"General Channel", workspace_id: 1, private: false, dm: false)
Channel.create(name:"general", description:"General Channel", workspace_id: 2, private: false, dm: false)
Channel.create(name:"general", description:"General Channel", workspace_id: 3, private: false, dm: false)
Channel.create(name:"general", description:"General Channel", workspace_id: 4, private: false, dm: false)
Channel.create(name:"Hip Replacements", description:"All about Hips", workspace_id: 3, private: false, dm: false, topic: "hips!")
Channel.create(name:"1.3", workspace_id:1, private:true, dm:true)
Channel.create(name:"1.2.3", workspace_id: 1, private:true, dm:true)

Subscription.create(subscriber_id: 1, subscribable_id: 1, subscribable_type: :Workspace, admin: true)
Subscription.create(subscriber_id: 2, subscribable_id: 1, subscribable_type: :Workspace, admin: true)
Subscription.create(subscriber_id: 3, subscribable_id: 1, subscribable_type: :Workspace)
Subscription.create(subscriber_id: 4, subscribable_id: 1, subscribable_type: :Workspace)
Subscription.create(subscriber_id: 5, subscribable_id: 1, subscribable_type: :Workspace)
Subscription.create(subscriber_id: 1, subscribable_id: 1, subscribable_type: :Channel, admin: true)
Subscription.create(subscriber_id: 1, subscribable_id: 2, subscribable_type: :Channel, admin: true)
Subscription.create(subscriber_id: 1, subscribable_id: 3, subscribable_type: :Channel, admin: true)
Subscription.create(subscriber_id: 2, subscribable_id: 1, subscribable_type: :Channel)
Subscription.create(subscriber_id: 3, subscribable_id: 1, subscribable_type: :Channel, admin: true)
Subscription.create(subscriber_id: 4, subscribable_id: 1, subscribable_type: :Channel)
Subscription.create(subscriber_id: 5, subscribable_id: 1, subscribable_type: :Channel)
Subscription.create(subscriber_id: 6, subscribable_id: 1, subscribable_type: :Channel)
Subscription.create(subscriber_id: 3, subscribable_id: 3, subscribable_type: :Workspace)
Subscription.create(subscriber_id: 3, subscribable_id: 3, subscribable_type: :Channel)
Subscription.create(subscriber_id: 3, subscribable_id: 4, subscribable_type: :Channel)
Subscription.create(subscriber_id: 1, subscribable_id: 8, subscribable_type: :Channel)
Subscription.create(subscriber_id: 3, subscribable_id: 8, subscribable_type: :Channel)
Subscription.create(subscriber_id: 1, subscribable_id: 9, subscribable_type: :Channel)
Subscription.create(subscriber_id: 2, subscribable_id: 9, subscribable_type: :Channel)
Subscription.create(subscriber_id: 3, subscribable_id: 9, subscribable_type: :Channel)
Subscription.create(subscriber_id: 4, subscribable_id: 9, subscribable_type: :Channel, pending: true)

Message.create(author_id: 1, channel_id: 1, body: "Welcome everyone!")
Message.create(author_id: 2, channel_id: 1, body: "Thanks!")
Message.create(author_id: 3, channel_id: 1, body: "thanks")
Message.create(author_id: 4, channel_id: 1, body: "Where am I?")
Message.create(author_id: 2, channel_id: 1, body: "What time is lunch?")
