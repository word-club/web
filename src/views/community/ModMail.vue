<template>
	<div style="width: 100%">
		<v-card max-width="600"
			class="mx-auto"
			outlined
		>
			<v-card-title>Mail to the moderators</v-card-title>
			<v-divider></v-divider>
			<v-card-text>
				<text-field
					v-model="mail.to"
					label="Moderator Email"
					name="email"
					icon="mdi-at"
				/>
				<div class="py-4" />
				<text-field
					v-model="mail.subject"
					label="Subject"
					name="subject"
					icon="mdi-format-title"
				/>
				<div class="py-4" />
				<text-area
					v-model="mail.body"
					label="Message Body"
					name="body"
					icon="mdi-form-textbox"
					counter="512"
				/>
			</v-card-text>
			<v-card-actions>
				<v-spacer/>
				<v-btn color="error lighten-2" @click="reset">Reset</v-btn>
				<v-btn color="primary" @click="send">Send</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "ModMail",
	props: {},
	data: () => ({
		mail: {
			to: null,
			subject: null,
			body: null
		}
	}),
	computed: {},
	methods: {
		send() {
			//TODO: implement mod-mail send
		},
		reset() {
			this.mail = {
				to: null,
				subject: null,
				body: null
			}
		}
	}
}
</script>
