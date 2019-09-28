<template>
  <q-page class="flex flex-center">
    <my-player />
  </q-page>
</template>

<script>
import MyPlayer from '../components/player';

export default {
  name: 'PageIndex',
  components: { MyPlayer },
};
</script>
