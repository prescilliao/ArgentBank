import React, { useState } from 'react'
import EditName from './EditName'
import { useSelector } from 'react-redux';
import AccountCard from './AccountCard';


function Usercontent() {
    const [edit, setedit] = useState(false)
    const [userName, setUserName] = useState("");
    const { user } = useSelector((state) => state.auth);

    const datas = [
        {
            titre: "Argent Bank Checking (x8349)",
            content: "$2,082.79",
            description: "Available Balance"
        },
        {
            titre: "Argent Bank Savings (x6712)",
            content: "$10,928.42",
            description: "Available Balance"
        },
        {
            titre: "Argent Bank Credit Card (x8349)",
            content: "$184.30",
            description: "Current Balance"
        }
    ]

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
                    {datas.map((data, index) => (<AccountCard key={index} data={data} />))}
                </div>
            </main>
        </div>
    )
}

export default Usercontent