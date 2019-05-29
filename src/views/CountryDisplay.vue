<template>
  <div>
    country: {{country}}
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component({
  data() {
    return {
      name: this.$route.params.name,
      country: this.$store.getters.getCountryByName(this.$route.params.name)
    }
  }
})
export default class Countries extends Vue {}
</script>
