async function getEmoji(setEmoji) {
    const bodyParams = {"limit": 1}
    const params = new URLSearchParams(bodyParams)
    const url = "https://api.emojisworld.fr/v1/random?"+params
    const response = await fetch(url)
    var data = await response.json()
    console.log(data)
    const {emoji}=data.results[0]
    console.log("This is the emoji:"+ emoji)
    setEmoji(emoji)
    }

export default getEmoji



