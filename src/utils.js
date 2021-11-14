export function generateFullLink(link) {
	if (link.startsWith("http://localhost:8000")) return link
	return "http://localhost:8000" + link
}
