<template>
  <div class="page-main">
    <div class="img-profile">
      <div class="img-item">
        <div class="block-img">
          <img src alt />
        </div>
      </div>
    </div>
    <div class="wall">
      <div class="info-user">
          <div class="block-user-name">
              <h4 class="block-user-name-title">{{name}} {{family}}</h4>
          </div>
          <div class="block-user-info"></div>
      </div>
      <div class="record-info">
          <div class="coment"></div>
      </div>
    </div>
  </div>
</template>


<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto");
</style>


<script>
export default {
  name: "home",


    computed: {
    name() {
      return this.$store.getters.info.name;
    },
    family() {
      return this.$store.getters.info.family;
    }
  }
};

</script>
