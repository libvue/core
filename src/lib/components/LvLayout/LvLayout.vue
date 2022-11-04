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
        },
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
            if (header) {
                this.headerHeight = window.getComputedStyle(header).height;
            } else {
                this.headerHeight = '0px';
            }
        },
    },
};
</script>

<style lang="scss">
body {
    background-color: var(--background-color);
}
.lv-layout {
    $self: &;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    width: 100%;
    height: 100%;

    &__header {
        position: sticky;
        top: 0;
        z-index: 1;
        border-bottom: 1px solid var(--border-color);
        background-color: var(--header-color);
        width: 100%;

        &-container {
            margin: 0 auto;
            max-width: var(--max-width);
        }
    }

    &__container {
        display: flex;
        flex-grow: 1;
        margin: 0 auto;
        width: 100%;
        max-width: var(--max-width);
        // padding-top: v-bind(headerHeight);
    }

    &__sidebar {
        box-sizing: border-box;
        border-right: 1px solid var(--border-color);
        height: 100%;
        position: sticky;
        top: v-bind(headerHeight);

        &-container {
            position: sticky;
            top: v-bind(headerHeight);
            box-sizing: border-box;
            padding: 1.5rem;
            max-height: calc(100vh - v-bind(headerHeight));
            overflow-y: auto;
        }
    }
    &__main {
        flex-grow: 1;
        box-sizing: border-box;
        padding: 1.5rem;

        &-container {
            margin: 0 auto;
            max-width: v-bind(mainMaxWidth);
        }
    }
}
</style>
