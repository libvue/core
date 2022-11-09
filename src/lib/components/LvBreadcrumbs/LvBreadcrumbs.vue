<template>
    <div class="lv-breadcrumbs">
        <lv-icon v-if="showHome" class="lv-breadcrumbs__home" name="home" @click="onClickHome" />
        <lv-icon
            v-if="hasCrumbs"
            name="chevron-right"
            class="lv-breadcrumbs__chevron-right"
        />
        <template v-for="(crumb, index) in crumbs">
            <a
                class="lv-breadcrumbs__crumb"
                :class="{ 'lv-breadcrumbs__crumb--active': index === crumbs.length - 1 }"
                @click="onClickCrumb(crumb.path)"
            >
                {{ crumb.title }}
            </a>
            <lv-icon
                v-if="index < crumbs.length - 1"
                name="chevron-right"
                class="lv-breadcrumbs__chevron-right"
            />
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
    computed: {
        hasCrumbs() {
            return this.crumbs.length > 0;
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
.lv-breadcrumbs {
    display: flex;
    align-items: center;
    &__home {
        margin-right: .5rem;
        color: var(--text-color-dimmed);
        &:hover:not(&--active) {
            cursor: pointer;
            color: var(--text-color);
        }
    }
    &__chevron-right {
        margin: 0 .5rem;
        color: var(--text-color-dimmed);
    }
    &__crumb {
        color: var(--text-color-dimmed);
        font-weight: 500;

        &:hover:not(&--active) {
            cursor: pointer;
            color: var(--text-color);
        }
        &--active {
            color: var(--text-color);
        }
    }
}
</style>
