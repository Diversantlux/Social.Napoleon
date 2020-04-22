<template>
    <form @submit.prevent="onUpload">
        <!--        <label for="commentText">Текст комментария</label>-->
        <!--        <textarea name="comment" id="commentText" cols="30" rows="10">-->
        <!--            </textarea>-->
        <!--        <label> Имя-->
        <!--            <input type="text">-->
        <!--        </label>-->
        <input name="myFile" ref="file" accept="image/png" @change="previewImage" type="file">
        <button type="submit">Отправить</button>
    </form>
</template>

<script>
    import firebase from 'firebase/app'
    export default {
        name: "CommentForm",
        data() {
            return {
                imageData: null,
                picture: null,
                uploadValue: 0
            }
        },
        methods: {
            previewImage(event) {
                this.uploadValue = 0;
                this.picture = null;
                this.imageData = event.target.files[0];
            },
            onUpload() {
                this.picture = null;
                const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
                storageRef.on(`state_changed`, () => {

                    }, error => {
                        console.log(error.message)
                    },
                    () => {
                        console.log('complete')
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>