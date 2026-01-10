export default async function NewsDetailPage(
	{
		params
	}: {
		params: Promise<{ exhibition_id: string }>
	}
) {

	const { exhibition_id: id } = await params;

}
