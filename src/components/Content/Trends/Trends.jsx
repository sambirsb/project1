import React from 'react'
import c from './Trends.module.css'

let Trends = (props) => {
    return (
        <section className={c.trends}>
            <div className={c.span_container}>
                <a className={c.span}>Today's trends</a>
            </div>
            <div className={c.trends_container}>
                {props.trend.map(u => <div key={u.id} className={c.trend_container}>
                    <a className={c.rubric}>
                        {u.rubric}
                    </a>

                    <a className={c.hashtag}>
                        {u.name}
                    </a>
                    <a className={c.posp_num}>
                        Posts: {u.postAmount}
                    </a>
                </div>)}
            </div>
        </section>
    );
}

export default Trends