
// Create these variables, outside the react component, may be in a seperate file because
// then it will be initialized only once when app starts, bootsup

// export const API_KEY = "uGE6w6AvsFXrGdAE0UpB4oTWEzfZ05E9";
// export const weatherAPI =
//   "http://dataservice.accuweather.com/currentconditions/v1/topcities/";
// export const lang = "en-gb";
// export const maxrows = 50;

export const itemsPerPage = 10;

// cannot have two defaults
export const apiConfig = {
    API_KEY: "uGE6w6AvsFXrGdAE0UpB4oTWEzfZ05E9",
    weatherAPI: "http://dataservice.accuweather.com/currentconditions/v1/topcities/",
    lang: "en-gb",
    maxrows: 50
}

// export using default
// export default apiConfig = {
//     API_KEY: "uGE6w6AvsFXrGdAE0UpB4oTWEzfZ05E9",
//     weatherAPI: "http://dataservice.accuweather.com/currentconditions/v1/topcities/",
//     lang: "en-gb",
//     maxrows: 50
// }

// const - will be exported like this
// {
//     apiConfig = {
//         API_KEY: "uGE6w6AvsFXrGdAE0UpB4oTWEzfZ05E9",
//         weatherAPI: "http://dataservice.accuweather.com/currentconditions/v1/topcities/",
//         lang: "en-gb",
//         maxrows: 50
//     }
// }

// default - will be exported like this
// apiConfig = {
//     API_KEY: "uGE6w6AvsFXrGdAE0UpB4oTWEzfZ05E9",
//     weatherAPI: "http://dataservice.accuweather.com/currentconditions/v1/topcities/",
//     lang: "en-gb",
//     maxrows: 50
// }
