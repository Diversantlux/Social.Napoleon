<template>
  <div class="page-main">
    <div class="img-profile">
      <div class="img-item">
        <div class="block-img">
          <container></container>
        </div>
      </div>
    </div>
    <div class="wall">
      <div class="info-user">
          <div class="block-user-name">
              <h4 class="block-user-name-title">{{name}} {{family}}</h4>
          </div>
          <div class="block-user-info">
            <div><p>Дата рождения</p><p></p></div>
            <div><p>Пол</p><p></p> {{male}}</div>
            <div><P>Город</P><p></p> {{city}}</div>
          </div>
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
 import Container from "../components/app/container";
export default {
  name: "home",
components: {
            
            Container
        },

    computed: {
    name() {
      return this.$store.getters.info.name;
    },
    family() {
      return this.$store.getters.info.family;
    },
  }
};

</script>
