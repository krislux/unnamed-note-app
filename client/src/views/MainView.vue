<template>
  <main class="flex">
    <div class="flex-1">
      <OrganizationList />
    </div>
    <div class="flex-1">
      <OrganizationList />
    </div>
  </main>
</template>

<script lang="ts">
import OrganizationList from '@/components/OrganizationList.vue';

export default {
  components: {
    OrganizationList
  },
  // data() {
  //   return {
  //     'projects': [
  //       'test1',
  //       'test2'
  //     ]
  //   }
  // }
}
</script>

<style lang="scss" scoped>

</style>