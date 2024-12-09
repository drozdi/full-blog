import { Link } from 'react-router-dom';
import { XIcon } from '../../components/ui';

export function PostCard({ id, image_url, title, published_at, commentsCount }) {
	return (
		<div className="flex  w-72 m-5 border border-black">
			<Link className="flex flex-col h-full" to={`post/${id}`}>
				<img className="block w-full" src={image_url} alt={title} />
				<div className="flex flex-col justify-between border-t border-black p-1">
					<h4 className="flex-auto m-0">{title}</h4>
					<div className="flex justify-between mt-1">
						<div className="flex">
							<XIcon className="mr-2">mdi-calendar-text-outline</XIcon>
							{published_at}
						</div>
						<div className="flex">
							<XIcon className="mr-2">mdi-comment</XIcon>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
