function formatDate(dateString){
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const formattedDate = `${hours}: ${minutes} on ${day}/${month}/${year}`
    return formattedDate
}

export default formatDate