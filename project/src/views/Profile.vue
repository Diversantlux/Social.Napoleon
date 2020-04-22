<template>
  <div class="wrap">
      <div class="wrap-main">
    <div class="page-main" >
      <div class="img-profile">
        <div class="img-item">
          <div class="block-img">
            <container></container>
          </div>
          <div class="button-img">
            <comment-form></comment-form>
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
              <input id="male" type="text"  />
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
    import CommentForm from "../components/app/commentform";
    import Container from "../components/app/container";

    export default {
        name: 'Profile',
        components: {
            CommentForm,
            Container
        }
    }
</script>