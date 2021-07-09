module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

      def connect
        self.current_user = find_verified_user
      end

      private
        def find_verified_user
          # debugger
          session_token = cookies.encrypted[:_slacker_session]["session_token"]
          # puts "Session token in Connection: #{session_token}"
          if verified_user = User.find_by(session_token: session_token)
            # puts "User: #{verified_user}"
            verified_user
          else
            reject_unauthorized_connection
          end
        end
  end
end
