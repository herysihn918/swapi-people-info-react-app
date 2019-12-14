BASE_URL = 'https://https://swapi.co/api'

async function get_fetch_api(link){
    try {
        let response = await fetch(BASE_URL + link)
        
        if (response.status === 200)
        {
            let json = await response.json()
            return {
                data: json,
                status: 200,
                error: null
            }
        }   
        else
        {
            return {
                status: response.status,
                error: null
            }
        }
    } catch (err) {
        console.log("Error: "+API_ROOT + link, err)
        return {
            error: err
        }
    }
}

async function get_fetch_url(url) {
    try {
        let response = await fetch(url)
        
        if (response.status === 200)
        {
            let json = await response.json()
            return {
                data: json,
                status: 200,
                error: null
            }
        }   
        else
        {
            return {
                status: response.status,
                error: null
            }
        }
    } catch (err) {
        console.log("Error: "+API_ROOT + link, err)
        return {
            error: err
        }
    }
}

module.exports = { get_fetch_api, get_fetch_url }