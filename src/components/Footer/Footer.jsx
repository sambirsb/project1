import React from "react";
import c from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={c.left}>
                <div className={c.logo_container}>
                    <span>Logo</span>
                </div>
            </div>
            <div className={c.right}>
                <div className={c.text_container}>
                    <div className={c.text}>
                        <div>
                            Sambir
                        </div>
                        <div>
                            Copyright © 2023. All rights reserved.
                        </div>
                    </div>
                    <div className={c.text}>
                        <div>
                            Sambir
                        </div>
                        <div>
                            Support: examplemail@email.com
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer