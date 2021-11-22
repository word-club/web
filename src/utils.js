export function generateFullLink(link) {
	if (link.startsWith("http://")) return link
	else if (link.startsWith("https://")) return link
	else return "http://localhost:8000" + link
}
