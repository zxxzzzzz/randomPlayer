<template>
  <q-page class="flex flex-center">
    <my-player
      v-if="isShowPlayer"
      ref="myPlayer"
      :tracks="tracks"
      @tracksEnd="setFM"
      @clickLike="like"
    />
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MyPlayer from '../components/player/index';

export default {
  name: 'PageIndex',
  components: { MyPlayer },
  data: () => ({
    isShowPlayer: false,
  }),
  computed: {
    ...mapGetters('FM', {
      tracks: 'tracks',
    }),
  },
  created() {
    const phone = '13002558195';
    const password = 'qwe123456wyyyy';
    this.login({ phone, password }).then(() => {
      this.setFM().then(() => {
        this.isShowPlayer = true;
      });
    });
  },
  methods: {
    ...mapActions('FM', [
      'setFM',
      'like',
    ]),
    ...mapActions('User', [
      'login',
    ]),
  },
};
</script>
