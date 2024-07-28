import React from 'react'
import Button from './Button'

function AccountCard({ data }) {
    return (
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{data.titre}</h3>
                    <span className="account-amount">{data.content}</span>
                    <p className="account-amount-description">{data.description}</p>
                </div>
                <Button />
            </section>
        </>
    )
}

export default AccountCard