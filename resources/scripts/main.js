window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        })
    } else { 
        h1.textContent = 'Geolocation is not supported by your browser or you have denied permission to use it.';
    }
});