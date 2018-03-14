import React, { Component } from 'react'

import MailChimpForm from './mailchimpform'

class MailChimp extends Component {
    render() {
        const action = "https://world.us17.list-manage.com/subscribe/post?u=18ad6610703e39b8ae35e7dbe&amp;id=4efd0beae1"
        return (
            <div>
                <MailChimpForm action={action} />
            </div>
        )
    }
}

export default MailChimp;