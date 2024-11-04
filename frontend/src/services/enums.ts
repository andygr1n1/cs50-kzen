export enum DIFFICULTY_ENUM {
    LIGHT = 'light',
    MEDIUM = 'medium',
    LEGEND = 'legend',
    EPIC = 'epic',
    STAR = 'star',
    FRIEND_OF_DEATH = 'friend_of_death',
    IMMORTAL = 'immortal',
}

export enum APP_ROUTES_ENUM {
    LOGIN = 'login',
    REGISTER = 'register',
    ACTIVATE_REGISTERED_USER = 'register/activation',
    ACTIVATE_PENDING_REGISTERED_USER = 'register/pending',
    RESTORE_ACCOUNT = 'restore',
    NEW_PASSWORD = 'new_password',
    PROFILE = 'profile',
    GOALS = 'goals',
    DASHBOARD = 'dashboard',
}

export enum SERVER_ROUTES {
    PROFILE_IMAGE_UPLOAD = 'profile-image-upload',
    PROFILE_IMAGE_DELETE = 'profile-image-delete',
    GOAL_SLIDE_IMAGE_UPLOAD = 'goal-slide-image-upload',
}
