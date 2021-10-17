<template>
  <v-app>
    <the-app-bar />
    <v-main>
      <v-container fluid class="pa-0">
        <v-card
          flat
          color="transparent"
          min-height="calc(100vh-60px)"
        >
          <transition name="view">
            <router-view />
          </transition>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    TheAppBar: () => import("@/components/TheAppBar.vue")
  }
};
</script>
