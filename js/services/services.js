const postData = async (url, data) => {
	const res = await fetch(url, {
		method: "POST",
		headers: {
			'Content-type': 'application/json'
		},
		body: data
	});

	return await res.json();
};

const getResourses = async (url) => {
	const res = await fetch(url)

	// ЕСЛИ ЕСТЬ ОШИБКА ПРИ ПОЛУЧЕНИИ ФЕТЧА
	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}


	return await res.json();
};

export { postData };
export { getResourses };