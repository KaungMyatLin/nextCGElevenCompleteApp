import { useState } from 'react';
import classes from './contact-form.module.css'
import Notification from '@components/ui/notification'

async function setContactData (contactDetail) {
    const resp = await fetch('/api/contact', {
        method: 'POST'
        , body: JSON.stringify(contactDetail),
        headers: {
            'content-type': 'application/json'
        }
    })

    const data = await resp.json()

    if (!resp.ok) {
        throw new Error (data.message || 'something went wrong')
    }
}

const contactForm = () => {
    const [entEm, setEntEm] = useState('')
    const [entNm, setEntNm] = useState('')
    const [entMsg, setEntMsg] = useState('')
    const [requestStatus, setRequestStatus] = useState() // 'pending','success','error'
    const [requestError, setRequestError] = useState()
    const sendMsgHdl = async(e) => {
        e.preventDefault();
        const bodyContent = {
            email: entEm
            , name: entNm
            , message: entMsg
        }
        setRequestStatus('pending')
        try {
            await setContactData(bodyContent)
            setRequestStatus('success')
        }
        catch (err) {
            setRequestError(err.message)
            setRequestStatus('error')
        }
    }
    let notification;
    if (requestStatus === 'pending') {
        notification = {
            status: 'pending'
            , title: 'Sending message... '
            , message: 'message is on its way'
        }
    }
    if (requestStatus === 'success') {
        notification = {
            status: 'success'
            , title: 'Sent message. '
            , message: 'message reached'
        }
    }
    if (requestStatus === 'error') {
        notification = {
            status: 'pending'
            , title: 'Error! '
            , message: requestError
        }
    }
    return (
        <section className={classes.contact} >
            <h1>How can I help you</h1>
            <form className={classes.form} onSubmit={sendMsgHdl}>
                <div className={classes.controls}>
                    <div className={classes.control} >
                        <label htmlFor="email"> Your Email </label>
                        <input type="email" id="email" required value={entEm} onChange={(e) => setEntEm(e.target.value)}/>
                    </div>
                    <div className={classes.control} >
                        <label htmlFor="name"> Your Name </label>
                        <input type="text" id="name" required value={entNm} onChange={(e) => setEntNm(e.target.value)}/>
                    </div>
                </div>
                <div className={classes.control} >
                    <label htmlFor="message"> Your Message </label>
                    <textarea id="message" rows={5} required value={entMsg} onChange={(e) => setEntMsg(e.target.value)}/>
                </div>
                <div className={classes.actions} >
                    <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
        </section>
    )
}

export default contactForm