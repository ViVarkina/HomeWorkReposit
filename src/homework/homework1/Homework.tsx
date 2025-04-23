import {Message} from "./Message.tsx";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}
const messageData1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Siok',
    message: 'mnogo textaaaaaaaaaa',
    time: '21:00',
}
const messageData2 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'RobinTochaOklfkghybvnnnn nnnnnnnnnnn nnnnnnnn nnnnnnnnnnnnnnnn',
    message: 'Lore kvjnj mklm kmklm kmk mklm kn jb jb km ; mk nj bg yg h  n mmlmmkml',
    time: '12:00',
}

export const Homework = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '500px'}}>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={messageData1.avatar}
                name={messageData1.name}
                message={messageData1.message}
                time={messageData1.time}
            />
            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
                incoming
            />

        </div>
    )
}


