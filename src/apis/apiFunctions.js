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
        return {
            error: err
        }
    }
}

module.exports = { get_fetch_url }