import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { postCollectionRef } from "../config/collections";

const Posts = () => {
	const [post, setPost] = useState({ name: "", description: "" });

	const handleChange = (prop) => (event) => {
		setPost({ ...post, [prop]: event.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await addDoc(postCollectionRef, post);
		alert("Document added");
		console.log(res);
		setPost({ name: "", description: "" });
	};
	return (
		<div>
			<h1>Posts</h1>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange("name")}
					value={post.name}
					type="text"
					name="name"
					placeholder="Name"
				/>
				<input
					onChange={handleChange("description")}
					value={post.description}
					type="text"
					name="description"
					placeholder="Description"
				/>
				<button type="submit">Add Post</button>
			</form>
		</div>
	);
};

export default Posts;
