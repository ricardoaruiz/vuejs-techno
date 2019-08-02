<template>
    <div :id="id" 
        v-show="isOn"
        class="loading_overlay">

        <div class="loading">
            <p>{{loadingMessage}}</p>
        </div>

    </div>
</template>

<script>
    import LoadingPageService, { GLOBAL_LOADING } from './LoadingPageService'
    export default {
        name: 'LoadingPage',
        props: {
            id: {
                type: String,
                required: false,
                default: GLOBAL_LOADING
            },
            loadingMessage: {
                type: String,
                required: false,
                default: 'Loading...'
            }
        },
        data() {
            return {
                isOn: false
            }
        },
        created() {
            LoadingPageService.subscribe(this.id, (event) => {
                this.isOn = event.isOn;
            });
        },
        destroyed() {
            LoadingPageService.unsubscribe(this.id);
        }
    }
</script>

<style scoped>
    body {
        overflow: hidden;
    }
    .loading_overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.2);
        color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .loading {
        display: flex;
        align-items: center;
    }
    .loading p {
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>
