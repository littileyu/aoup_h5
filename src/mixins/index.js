/**
 * 共有方法
 */

export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$root.$refs.app.jumpAnime=    this.$root.$refs.app.front
        this.$router.push(to);

      }
    },
    back (to) {
      if (this.$router) {
        this.$root.$refs.app.jumpAnime=    this.$root.$refs.app.backwayback
        this.$router.push(to);
      }
    }
  }
}
