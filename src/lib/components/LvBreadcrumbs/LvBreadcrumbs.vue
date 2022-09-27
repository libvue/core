<template>
    <div class="lv-breadcrumbs">
        <lv-icon class="lv-breadcrumbs__home" name="home" v-if="showHome" @click="onClickHome" />
        <template v-for="(crumb, index) in crumbs">
            <a
                class="lv-breadcrumbs__crumb"
                @click="onClickCrumb(crumb.path)"
                :class="{ 'lv-breadcrumbs__crumb--active': index === crumbs.length - 1 }"
                >{{ crumb.title }}</a
            >
            <lv-icon name="chevron-right" class="lv-breadcrumbs__chevron-right" v-if="index < crumbs.length - 1" />
        </template>
    </div>
</template>

<script>
export default {
    props: {
        crumbs: {
            type: Array,
            default: () => [],
        },
        showHome: {
            type: Boolean,
            default: true,
        },
        homePath: {
            type: String,
            default: '/',
        },
    },
    methods: {
        onClickHome() {
            this.$router.push({ path: this.homePath });
        },
        onClickCrumb(path) {
            this.$router.push({ path });
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-breadcrumbs {
    display: flex;
    align-items: center;
    &__home {
        margin-right: 20px;
        color: $text-color-dimmed;
        &:hover:not(&--active) {
            color: $text-color;
            cursor: pointer;
        }
    }
    &__chevron-right {
        margin: 0 10px;
        color: lighten($text-color-dimmed, 20);
    }
    &__crumb {
        color: $text-color-dimmed;
        font-weight: 500;

        &:hover:not(&--active) {
            color: $text-color;
            cursor: pointer;
        }
        &--active {
            color: $color-primary;
        }
    }
}
</style>
