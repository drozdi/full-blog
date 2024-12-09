import { useEffect, useMemo, useState } from 'react';

import { repComment, repPost } from '../api/rep';
import { Loader } from '../components';
import { debounce } from '../utils/debounce';
import { Pagination } from './components/pagination';
import { PostCard } from './components/post-card';
import { Search } from './components/search';
import { getCommentsCount, getLastPageFromLinks } from './components/utils';

export function MainPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(6);
	const [lastPage, setLastPage] = useState(1);
	const [search, setSearch] = useState('');
	const [startSearch, setStartSearch] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);

			const res = await repPost.find(search, page, limit);
			setLastPage(getLastPageFromLinks(res.headers.get('link') || ''));

			const posts = await res.json();
			const comments = await repComment.list().then((res) => res.json());

			setPosts(
				posts.map((post) => {
					return {
						...post,
						commentsCount: getCommentsCount(comments, post.id),
					};
				}),
			);
			setIsLoading(false);
		}
		fetchData();
	}, [page, limit, startSearch, search]);
	const startDelayedSearch = useMemo(() => debounce(setStartSearch, 2000), []);
	const onSearch = ({ target }) => {
		setSearch(target.value);
		startDelayedSearch(!startSearch);
	};
	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="flex flex-col justify-between items-center px-5 gap-5">
			<Search
				className="w-full max-w-md"
				searchPhrase={search}
				onChange={onSearch}
			/>
			{posts.length ? (
				<div className="flex flex-wrap justify-center m-auto">
					{posts.map((post) => (
						<PostCard key={post.id} {...post} />
					))}
				</div>
			) : (
				<div className="text-center text-2xl">Статьи не найдены</div>
			)}
			<Pagination
				setPage={setPage}
				page={page}
				lastPage={lastPage}
				limit={limit}
				setLimit={setLimit}
			/>
		</div>
	);
}
