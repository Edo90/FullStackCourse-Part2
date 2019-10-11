import React from 'react'

const Notification = ({isError = false, notificationMessage}) => {
    const notificationType = isError === true ? 'error' : 'notification'
    return (
        <div className={notificationType} >
            {notificationMessage}
        </div>
    )
}

export default Notification