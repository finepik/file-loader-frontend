import {sendMessage} from './sendMessage'

test('validation', () => {
    const data = {
        objectName: 'object',
        equipmentsName: 'equipment',
        intro: 'file.zip',
        fileName: intro
    }
    expect(sendMessage()).toBe(`<b>Заявка с сайта</b>\n\
    имя объекта: \n<b>${data.objectName}</b>\n\
    имя оборудования: \n<b>${data.equipmentsName}</b>\n\
    имя архива: \n<b>${data.fileName}</b>\n`
    )
}) 

describe('sendMessage', () => {
    test('correct data', () => {
        const data = {
            objectName: 'object',
            equipmentsName: 'equipment',
            intro: 'file.zip',
            fileName: "file.zip"
        }
        expect(sendMessage()).toBe(`<b>Заявка с сайта</b>\n\
        имя объекта: \n<b>${data.objectName}</b>\n\
        имя оборудования: \n<b>${data.equipmentsName}</b>\n\
        имя архива: \n<b>${data.fileName}</b>\n`
        )
    }) 

    test('empty data', () => {
        const data = {
            objectName: '',
            equipmentsName: '',
            intro: '',
            fileName: ""
        }
        expect(sendMessage()).toBe(`<b>Заявка с сайта</b>\n\
        имя объекта: \n<b>${data.objectName}</b>\n\
        имя оборудования: \n<b>${data.equipmentsName}</b>\n\
        имя архива: \n<b>${data.fileName}</b>\n`
        )
    }) 

    test('no data', () => {
        const data = null
        expect(sendMessage()).toBe(`<b>Заявка с сайта</b>\n\
        имя объекта: \n<b>${data.objectName}</b>\n\
        имя оборудования: \n<b>${data.equipmentsName}</b>\n\
        имя архива: \n<b>${data.fileName}</b>\n`
        )
    }) 

})