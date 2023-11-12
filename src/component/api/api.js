export const apiTravel = "https://travelapikarshi2.pythonanywhere.com/";

export const byId = (id) => document.getElementById(id).value;

// add and edit img junatish
export const byIdImg = (id) => document.getElementById(id).files.length != 0
    ? document.getElementById(id).files[0]
    : null;

// headers jwt token. hamma page uzida config yozilgan, bu xech qayerga chaqirilmagan
export const config = {
    headers: {
        Authorization: sessionStorage.getItem('jwtToken'),
    }
};