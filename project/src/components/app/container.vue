<template>
    <div class="container">
        <img :src="link"
             v-for="link in images" :key="link" alt="">
    </div>
</template>

<script>
    import firebase from 'firebase/app'

    export default {
        name: "Container",
        data() {
            return {images: []}

        },
        methods: {
            async getImages() {
                const listOfImages = await firebase.storage().ref().listAll();
                listOfImages.items.forEach(async (item) => {
                    let url = await firebase.storage().ref().child(item.location.path).getDownloadURL();
                    this.images.push(url)
                })
            }
        },
        mounted() {
            this.getImages()
        }
    }
</script>
<style>
.container {
  background-color: rgb(255, 255, 255);
  width:100%;
  height: 100%;
}
img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;

}
</style>