<template>
    <div class="lv-file-input">
        <div class="lv-file-input__container">
            <lv-button class="lv-file-input__button" color="solid-primary" label="Select File" size="small"/>
            <div class="lv-file-input__selection"></div>
        </div>
        <input type="file" class="lv-file-input__real">
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.lv-file-input {
    position: relative;
    &__real {
        position: absolute;
        height: 0;
        opacity: 0;
    }
}
</style>
