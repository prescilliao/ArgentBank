import { useDispatch, useSelector } from "react-redux";
import { UpdateUserName } from "../redux/action";


const EditName = ({ setedit, userName, setUserName }) => {
    const dispatch = useDispatch();
    const { token, user, error } = useSelector((state) => state.auth);


    const handleUpdate = (e) => {
        e.preventDefault();
        if (token && userName != "") {
            dispatch(UpdateUserName({ userName, token }));
            setUserName(userName);
            setedit(false);
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>{"Modifier votre nom d'utilisateur"}</h1>
                <form onSubmit={handleUpdate}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Nom</label>
                        <input
                            type="text"
                            id="username"
                            value={userName}
                            placeholder="Votre nouveau nom"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                    <button className="sign-in-button" type="submit">
                        Envoyer
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {/* {user && <p className="success-message">User name updated!</p>} */}
            </section>
        </main>
    );
};

export default EditName;