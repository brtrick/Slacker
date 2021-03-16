json.set! user.id do    
    json.extract! user, :id, :full_name, :display_name, :email, :created_at, :updated_at
end