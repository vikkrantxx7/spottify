const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectURI = 'http://localhost:9100/'
const clientId = 'b5b5b1cfe9784001aa88e6d2c3f8fa8f'
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
    '%20',
)}&response_type=token&show_dialog=true`
