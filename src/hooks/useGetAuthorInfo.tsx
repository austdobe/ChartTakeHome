import {useState} from "react";
import API from '../util/API';

const initialState = {
	page: 0,
	results: [],
};

export const useGetAuthorInfo = () => {
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState({});
	const [error, setError] = useState({});
	console.log("part1")

	const fetchAuthor = async () => {
		try {
			console.log("part2")
			setLoading(true);
			setError(false);

			const authors = await API.fetchAuthors('JK Rowling');
			console.log('authors', authors);
			setState({
				...authors,
			});

			setLoading(false);
		} catch (error) {
			setError(true);
		}

	};
	fetchAuthor();

	return { state, loading, error };
};