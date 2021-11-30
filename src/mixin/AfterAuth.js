import FetchMixin from "@/mixin/FetchMixin.js";
import FetchPublications from "@/mixin/FetchPublications.js";
import {mapMutations} from "vuex";

const AfterAuth = {
	mixins: [FetchMixin, FetchPublications],
	methods: {
		...mapMutations("publication", ["SET_TO_VIEW"]),
		afterAuth() {
			if (this.$route.name === "Home") {
				this.fetchPublications().then()
			} else if (this.$route.name === "Publication") {
				this.fetchDetail("publication")
			}
		}
	}
}

export default AfterAuth
