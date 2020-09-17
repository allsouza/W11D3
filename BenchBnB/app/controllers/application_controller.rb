class ApplicationController < ActionController::Base

    # protect_from_forgery with: :null_session #disable auth token

    helper_method :current_user, :logged_in?

    def current_user
         # Check for session_token
        return nil unless session[:session_token]

        # Return the user associated with the session_token (if token is valid)
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        @current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
