# XSpotify

This project was created for learning purposes. He as made with Angular 5 and generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4. He utilize the [Spotify Api](https://developer.spotify.com/documentation/web-api/reference/search/search/) to make Login, show albuns, artists and tracks.

## Development server

- Run for a dev server.
```sh
$ ng serve
```
 

- Navigate to `http://localhost:4200/`. The app will show the Login option. 

- When you make the login you will be redirect to the live url. In the console log will be show a url like <br/>```https://x-spotify.firebaseapp.com/redirect#access_token=BQBub6sJkLYeCIQ4pITfbkZhyNBfMF7yY0bDQ5keEKigL4ns1txlYI5MyrcKQVFCgvo-dXKgaAMy3CP3HzNOxThb41urtnqK8GdPUSI-gY6yi43u6nh_0biCSNVl3Et7QLK0v8qu0u3ApRx83_s1TkR-h4sTU_uUI3RXOoQeISkfyOlodqlLafJL1miqfNY1s1Jx2g&token_type=Bearer&expires_in=3600&state=123"``` <br/> wich contains the authorization token. 

- To Login in the development server you need to copy and paste that url switching the ```https://x-spotify.firebaseapp.com``` for ```localhost:4200``` so that the token can be saved in your local application.


## Live Demo

A live demo of this project can be found [here](https://x-spotify.firebaseapp.com/).