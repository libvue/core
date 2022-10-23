<template>
    <div class="lv-layout" :class="classObject">
        <!-- Header (f.e. global navigation) -->
        <header v-if="!!$slots['header']" role="banner" class="lv-layout__header">
            <div class="lv-layout__header-container">
                <slot name="header"></slot>
            </div>
        </header>

        <div class="lv-layout__container">
            <!-- Sidebar (f.e. local navigation) -->
            <div v-if="!!$slots['sidebar']" class="lv-layout__sidebar">
                <div class="lv-layout__sidebar-container">
                    <slot name="sidebar"></slot>
                </div>
            </div>
            <!-- Main  -->
            <main v-if="!!$slots['main']" role="main" class="lv-layout__main">
                <div class="lv-layout__main-container">
                    <slot name="main"></slot>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        debug: {
            type: Boolean,
            default: false,
        },
        mainMaxWidth: {
            type: String,
            default: '700px',
        }
    },
    data() {
        return {
            headerHeight: null,
        };
    },
    computed: {
        classObject() {
            return {
                [`lv-layout--debug`]: !!this.debug,
            };
        },
    },
    mounted() {
        this.createHeaderResizeObserver();
    },
    updated() {
        this.getHeaderHeight();
    },
    methods: {
        createHeaderResizeObserver() {
            new ResizeObserver(this.getHeaderHeight).observe(this.$el);
        },
        getHeaderHeight() {
            const header = this.$el?.querySelector('.lv-layout__header');
            if(header) {
                this.headerHeight = window.getComputedStyle(header).height;
            } else {
                this.headerHeight = '0px';
            }

        }
    }
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-layout {
    $self: &;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &__header {
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 1;
        border-bottom: 1px solid $border-color;

        &-container {
            max-width: $layout-container-max-width;
            margin: 0 auto;
        }
    }

    &__container {
        display: flex;
        flex-grow: 1;
        max-width: $layout-container-max-width;
        margin: 0 auto;
        width: 100%;
    }

    &__sidebar {
        box-sizing: border-box;
        border-right: 1px solid $border-color;
        height: 100%;

        &-container {
            padding: 1.5rem;
            box-sizing: border-box;
            position: sticky;
            top: v-bind(headerHeight);
            overflow-y: auto;
            max-height: calc(100vh - v-bind(headerHeight));
        }
    }
    &__main {
        flex-grow: 1;
        padding: 1.5rem;
        box-sizing: border-box;

        &-container {
            max-width: v-bind(mainMaxWidth);
            margin: 0 auto;
        }
    }

}
</style>
