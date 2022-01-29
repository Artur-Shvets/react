import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../asets/images/user.jpg";
import { NavLink } from "react-router-dom";

let Users = (props) => {

	let pages = [];
	let minPage;
	if (props.currentPage <= 5) {
		minPage = 1;
	} else {
		minPage = props.currentPage - 5;
	}
	let maxPage = minPage + 11;
	for (minPage; minPage < maxPage; minPage++) {
		pages.push(minPage);
	}

	return <div className={s.users}>
		<div className={s.pages} >
			{pages.map((p) => {
				return <span key={p}
					className={props.currentPage === p ? s.selectedPage : s.defaultPage}
					onClick={() => props.onPageChanged(p)} >{p}</span >
			})}
		</div >

		{props.users.map((u) => {
			return <div key={u.id} >
				<span className={s.userInfo} >
					<div >
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhoto}
								alt="description"
								className={s.usersPhoto} />
						</NavLink>
					</div >
					<div >
						{u.followed
							? <button onClick={() => {
								props.unfollow(u.id)
							}} >Follow</button >
							: <button onClick={() => {
								props.follow(u.id)
							}} >Unfollow</button >
						}
					</div >
				</span >

				<span className={s.userInfo} >
					<span >
						<div >{u.name}</div >
						<div >{u.status}</div >
					</span >
					<span >
						<div >{'u.location.country'}</div >
						<div >{'u.location.city'}</div >
					</span >
				</span >

			</div >
		}
		)}
	</div >
}

export default Users;