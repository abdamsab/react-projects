const paginate = (followers) => {
	const itemPerPage = 9;
	const pages = Math.ceil(followers.length/itemPerPage);

	const newFollower = Array.from({length:pages}, (_, index)=>{
		const start = index * itemPerPage
		return followers.slice(start, start+itemPerPage)
	})

	return newFollower
	
}

export default paginate
