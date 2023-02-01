import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Avatar from "../Content/NewsFeed/Avatar/Avatar";
import c from './Users.module.css';

let Users = React.memo((props) => {
    let PagesCount = Math.ceil(props.TotalUsers / props.PageSize);

    useEffect(() => {

    }, [props.user])

    let pages = []
    for (let i = 1; i <= PagesCount; i++) {
        pages.push(i)
    }

    let visiblePages = [
        props.CurrentPage,
        props.CurrentPage + 1,
        props.CurrentPage + 2,
        props.CurrentPage - 1,
        props.CurrentPage - 2,
        pages.length,
        1
    ]


    return <div className={c.main}>
        <div className={c.container}>
            {
                props.users.map(u =>
                    <NavLink to={`/profile/${u.id}`} className={c.user_div} key={u.id}>
                        <div className={c.img_conatiner}>
                            <Avatar size={'75px'} img={u.photos.small !== null ? u.photos.small : 'https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg'} />
                        </div>
                        <div className={c.name_div}>
                            <span className={c.name}>{u.name}</span>
                        </div>
                        {!u.followed
                            ? <div className={`${c.btn_con} ${c.follow}`}>
                                <object>
                                    <Link onClick={() => props.followUser(u.id)}>Follow</Link>
                                </object>
                            </div>
                            : <div className={`${c.btn_con} ${c.unfollow}`}>
                                <object>
                                    <Link onClick={() => props.unfollowUser(u.id)}>Unfollow</Link>
                                </object>
                            </div>}

                    </NavLink>
                )}
        </div>
        <div className={c.pagination}>
            {
                pages.map(
                    p => <span key={p} className={`${visiblePages.some(page => page === p)
                        ? c.page_span
                        : c.page_span_hidden} 
                        ${p === props.CurrentPage && c.selected_page_span} `}
                        onClick={() => props.onSelectPage(p)}>{p}</span>
                )
            }
        </div>
    </div>

})



export default Users