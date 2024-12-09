import { XBtn } from '../../components/ui';
import { SpecialPanel } from './special-panel';
export function PostContent({ post: { id, title, image_url, content, published_at } }) {
	return (
		<div className="max-w-4xl m-auto px-5">
			<h2 className="font-bold text-2xl mb-5">{title}</h2>
			<img className="float-left mr-4" src={image_url} alt={title} />
			<SpecialPanel
				className="m-5"
				id={id}
				publishedAt={published_at}
				prepend={
					<XBtn
						icon="mdi-pencil-box-outline"
						to={`/post/${id}/edit`}
						title="Редактировать"
					/>
				}
			/>
			<div className="text-lg whitespace-pre-line">{content}</div>
		</div>
	);
}
