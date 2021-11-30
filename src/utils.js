export function generateFullLink(link) {
	if (link.startsWith("http://")) return link
	else if (link.startsWith("https://")) return link
	else return process.env.VUE_APP_BACKEND_HOST + link
}
