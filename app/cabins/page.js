import Counter from "../_components/Counter";

export default async function Page() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
	const data = await res.json();
	return (
		<div>
			<h1>Cabins Page</h1>
			<ul>
				{data.map((comment) => (
					<li key={comment.id}>{comment.name}</li>
				))}
			</ul>
			<Counter />
		</div>
	);
}
