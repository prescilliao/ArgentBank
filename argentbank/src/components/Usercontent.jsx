import React, { useState } from 'react'
import EditName from './EditName'
import { useSelector } from 'react-redux';


function Usercontent() {
    const [edit, setedit] = useState(false)
    const [userName, setUserName] = useState("");
    const { user } = useSelector((state) => state.auth);

    // const userStorage = localStorage.getItem("user");
    // const user = JSON.parse(userStorage);
    // useEffect(() => {
    //     dispatch(fetchProfile({ token }));
    // }, [])
    return (
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{user?.userName} {user?.lastName}</h1>
                    <button className="edit-button" onClick={() => setedit(!edit)} >Edit Name</button>
                </div>

                {edit && <div>
                    <EditName setedit={setedit} userName={userName} setUserName={setUserName} />
                </div>}
                <div style={edit ? { display: "none" } : { display: "block" }}>
                    <h2 className="sr-only">Accounts</h2>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                            <span className="account-amount">$2,082.79</span>
                            <p className="account-amount-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                            <span className="account-amount">$10,928.42</span>
                            <p className="account-amount-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                            <span className="account-amount">$184.30</span>
                            <p className="account-amount-description">Current Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Usercontent