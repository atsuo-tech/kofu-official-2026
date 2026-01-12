export default async function NewsDetailPage(
	{
		params
	}: {
		params: Promise<{ group_id: string }>
	}
) {

	const { group_id: id } = await params;

}
