<template>
    <lv-heading v-space-after="0.5" :level="3">Image Carousel</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Can be used to display a lot of scrollable images.</lv-heading>
    <lv-card v-space-after="1">
        <lv-image-carousel>
            <lv-image-carousel-item>
                <lv-image src="https://picsum.photos/id/56/2880/1920" caption="Picsum Photos #56"/>
            </lv-image-carousel-item>
            <lv-image-carousel-item>
                <lv-image src="https://picsum.photos/id/56/2880/1920" caption="Picsum Photos #56"/>
            </lv-image-carousel-item>
            <lv-image-carousel-item>
                <lv-image src="https://picsum.photos/id/56/2880/1920" caption="Picsum Photos #56"/>
            </lv-image-carousel-item>
        </lv-image-carousel>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />

    <component-details component="LvImageCarousel"></component-details>
</template>


<script>
const code = `
<lv-image-carousel>
    <lv-image-carousel-item>
        <lv-image src="https://picsum.photos/id/56/2880/1920" caption="Picsum Photos #56"/>
    </lv-image-carousel-item>
    <lv-image-carousel-item>
        <lv-image src="https://picsum.photos/id/56/2880/1920" caption="Picsum Photos #56"/>
    </lv-image-carousel-item>
    <lv-image-carousel-item>
        <lv-image src="https://picsum.photos/id/56/2880/1920" caption="Picsum Photos #56"/>
    </lv-image-carousel-item>
</lv-image-carousel>
`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>

