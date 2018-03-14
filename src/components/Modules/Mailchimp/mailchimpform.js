// Dependencies
import React from "react";
import PropTypes from "prop-types"
import jsonp from "jsonp"
const getAjaxUrl = url => url.replace('/post?', '/post-json?')
import styled from "styled-components"

import { StyledDryInput } from "../../../assets/css/styledcomponents-text";
import { whiteGuilt, dustyGray, barelyBlue, cobaltBlue, sapphireBlue, royaleBlue, thatsOrange } from '../../../assets/css/swatches';




class SubscribeForm extends React.Component {
    constructor(props, ...args) {
        super(props, ...args)
        this.state = {
            status: null,
            msg: null
        }
    }

    onSubmit = e => {
        e.preventDefault()
        if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf("@") === -1) {
            this.setState({
                status: "error"
            })
            return
        }
        const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(this.input.value)}`;
        this.setState(
            {
                status: "sending",
                msg: null
            }, () => jsonp(url, {
                param: "c"
            }, (err, data) => {
                if (err) {
                    this.setState({
                        status: 'error',
                        msg: err
                    })
                } else if (data.result !== 'success') {
                    this.setState({
                        status: 'error',
                        msg: data.msg
                    })
                } else {
                    this.setState({
                        status: 'success',
                        msg: data.msg
                    })
                }
            })
        )
    }

    render() {
        const { action, messages, className, style, styles } = this.props
        const { status, msg } = this.state


        const localInput = {
            styles: {
                fontFamily: 'Nunito',
                background: 'white',
                color: '#4987F1',
                border: `4px solid #0A4EBC`,
                height: '75px',
                padding: '10px',
                width: '100%',
                marginBottom: '15px'
            }
        }

        const localButton = {
            styles: {
                fontFamily: 'Signika',
                background: '#F35B04',
                color: 'white',
                border: 'none',
                height: '50px',
                padding: '10px',
                width: '30%',
                margin: 'auto',
                display: 'block'
            }
        }

        return (
            <div className="mailChimpForm" style={style}>
                <form action={action} method="post" noValidate>
                    <div>

                        <input
                            style={localInput.styles}
                            className="emailCapture"
                            ref={node => (this.input = node)}
                            type="email"
                            defaultValue=""
                            name="EMAIL"
                            required={true}
                            placeholder={messages.inputPlaceholder}
                            
                            id="mce-EMAIL"
                        />


                        <button
                            className="submitButton"
                            style={localButton.styles}
                            disabled={this.state.status === "sending" || this.state.status === "success"}
                            onClick={this.onSubmit}
                            type="submit" >
                            {messages.btnLabel}
                        </button>
                    </div>



                    {status === "sending" && <p style={styles.sending} dangerouslySetInnerHTML={{ __html: messages.sending }} />}
                    {status === "success" && <p style={styles.success} dangerouslySetInnerHTML={{ __html: messages.success || msg }} />}
                    {status === "error" && <p style={styles.error} dangerouslySetInnerHTML={{ __html: messages.error || msg }} />}
                </form>
            </div>
        )
    }
}

SubscribeForm.propTypes = {
    messages: PropTypes.object,
    styles: PropTypes.object
}

SubscribeForm.defaultProps = {
    messages: {
        inputPlaceholder: "Your Email (required 🙏 )",
        btnLabel: "Subscribe",
        sending: "Sending...🤘",
        success: "🤙 &nbsp; Thanks! We Appreciate it.",
        error: "😖 &nbsp; Oops, this doesn't appear to be a valid email."
    },
    styles: {
        sending: {
            fontSize: 14,
            color: "#0A4EBC"
        },
        success: {
            fontSize: 14,
            color: "#0A4EBC"
        },
        error: {
            fontSize: 14,
            color: "red"
        }
    }
}

export default SubscribeForm;