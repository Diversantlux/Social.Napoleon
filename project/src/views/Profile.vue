<template>
  <div class="wrap" @submit.prevent="submitHandler">
      <div class="wrap-main">
    <div class="page-main" >
      <div class="img-profile">
        <div class="img-item">
          <div class="block-img">
            <img src alt />
          </div>
          <div class="button-img">
            <button class="button-img-item">Редактировать</button>
          </div>
        </div>
      </div>
      <div class="info-user-box">
        <div class="info-container">
          <div class="info-content">
            <div class="info-content-item">Имя</div>
            <div class="info-content-item-input">
              <input id="name" type="text" />
            </div>
          </div>
          <div class="info-content">
            <div class="info-content-item">Фамилия</div>
            <div class="info-content-item-input">
              <input id="family" type="text" />
            </div>
          </div>
          <div class="info-content">
            <div class="info-content-item">Пол</div>
            <div class="info-content-item-input">
              <input id="male" type="text" v-model.trim="male" />
            </div>
          </div>
          <div class="info-content">
            <div class="info-content-item">День рождения</div>
            <div class="info-content-item-input"></div>
          </div>
          <div class="info-content">
            <div class="info-content-item">Город</div>
            <div class="info-content-item-input">
              <input id="city" 
              type="text"
                v-model.trim="city"
                 />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="button-profile">
      <button class="btn waves-effect waves-light data-submit"
       type="submit">
        Сохранить
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
</template>


<script>


export default {
  name: "profile",
  data: () => ({
    city: "",
    male: "",
    name: "",
    family: ""
  }),
 
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        city: this.city,
        male: this.male,
        name: this.name,
        family: this.family
      };

      try {
        await this.$store.dispatch("profile", formData);
        this.$router.push("/");
      } catch (e) {
        console.log();
      }
    }
  }
};
</script>