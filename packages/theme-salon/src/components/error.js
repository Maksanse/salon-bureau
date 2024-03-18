import React from "react"
import { connect } from "frontity"

const Error = ({ state }) => {
    return (
        <>
            <h2>Erreur 404</h2>
            <p>
                La page <em>{state.router.link}</em> n'a pas pu être trouvé
            </p>
        </>
    )
}

export default connect(Error)