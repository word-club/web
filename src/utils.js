import {getBackendUrl} from "@/helper.js";

export function generateFullLink(link) {
	if (!link) return link
	if (link.startsWith("blob")) return link
	if (link.startsWith("http://")) return link
	else if (link.startsWith("https://")) return link
	else return getBackendUrl() + link
}
