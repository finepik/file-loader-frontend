import { CHAT_ID, URI_API, messageHeader } from "../data/telegramBotData"
import apiClient from "../axios"

// objectName: '',
// equipmentsName: '',
// intro: null, //  (video)
// fileName: introFile[0].file.name

const ERROR_MESSAGE = 'form data empty'

const createMessage = (formData) => {
    if (formData === null | undefined) return ERROR_MESSAGE
    let message = messageHeader
    
    message += `имя объекта: \n<b>${formData.objectName}</b>\n`
    message += `имя оборудования: \n<b>${formData.equipmentsName}</b>\n`
    message += `имя архива: \n<b>${formData.fileName}</b>\n`
    return message
}

const sendMessage = (formData) => {
    const message = createMessage(formData)
    if (message === ERROR_MESSAGE) return {error: ERROR_MESSAGE, message: ''}
    
    apiClient.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then(res => {
        return {message: String(res.data), error: ""}
    })
    .catch( err => {
        return {error: String(err.error), message: ""}
    })
}

export default sendMessage