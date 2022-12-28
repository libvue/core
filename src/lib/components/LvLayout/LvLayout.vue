<template>
    <div class="lv-layout" :class="classObject">
        <!-- Header (f.e. global navigation) -->
        <header v-if="!!$slots['header']" role="banner" class="lv-layout__header">
            <div class="lv-layout__header-container">
                <slot name="header"></slot>
            </div>
        </header>

        <!-- Sub Header (f.e. local nav on mobile) -->
        <div v-if="!!$slots['sub-header']" class="lv-layout__sub-header">
            <div class="lv-layout__sub-header-container">
                <slot name="sub-header"></slot>
            </div>
        </div>

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
        mainMaxWidth: {
            type: String,
            default: '700px',
        },
        sidebarWidth: {
            type: String,
            default: 'auto',
        },
        stickyHeader: {
            type: Boolean,
            default: true,
        },
        stickySubHeader: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            headerHeight: null,
            subHeaderHeight: null,
        };
    },
    mounted() {
        this.createHeaderResizeObserver();
        this.createSubHeaderResizeObserver();
    },
    updated() {
        this.getHeaderHeight();
        this.getSubHeaderHeight();
    },
    methods: {
        createHeaderResizeObserver() {
            new ResizeObserver(this.getHeaderHeight).observe(this.$el);
        },
        createSubHeaderResizeObserver() {
            new ResizeObserver(this.getSubHeaderHeight).observe(this.$el);
        },
        getHeaderHeight() {
            const header = this.$el?.querySelector('.lv-layout__header');
            if (header) {
                this.headerHeight = window.getComputedStyle(header).height;
            } else {
                this.headerHeight = '0px';
            }
        },
        getSubHeaderHeight() {
            const subHeader = this.$el?.querySelector('.lv-layout__sub-header');
            if (subHeader) {
                this.subHeaderHeight = window.getComputedStyle(subHeader).height;
            } else {
                this.subHeaderHeight = '0px';
            }
        },
    },
    computed: {
        classObject() {
            return {
                'lv-layout--sticky-header': this.stickyHeader && !this.stickySubHeader,
                'lv-layout--sticky-sub-header': this.stickySubHeader && !this.stickyHeader,
                'lv-layout--sticky-header-and-sub-header': this.stickySubHeader && this.stickyHeader,
            }
        }
    }
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
    background-color: var(--main-background-color);
    width: 100%;

    &__header {
        z-index: 1;
        border-bottom: 1px solid var(--border-color);
        background-color: var(--header-background-color);
        width: 100%;

        &-container {
            margin: 0 auto;
            max-width: var(--max-width);
        }
    }

    &__sub-header {
        z-index: 1;
        border-bottom: 1px solid var(--border-color);
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
        align-items: stretch;
        width: 100%;
        max-width: var(--max-width);
    }

    &__sidebar {
        box-sizing: border-box;
        border-right: 1px solid var(--border-color);
        top: 0;
        position: sticky;
        background-color: var(--sidebar-background-color);

        &-container {
            position: sticky;
            top: 0;
            box-sizing: border-box;
            padding: 1.5rem;
            max-height: calc(100vh - v-bind(headerHeight));
            overflow-y: auto;
            width: v-bind(sidebarWidth);
        }
    }
    &__main {
        position: relative;
        flex-grow: 1;
        box-sizing: border-box;
        padding: 1.5rem;
        background-color: var(--main-background-color);
        overflow: hidden; // needed for chart.js

        &-container {
            margin: 0 auto;
            max-width: v-bind(mainMaxWidth);
        }
    }

    &--sticky-header {
        #{$self}__header {
            position: sticky;
            top: 0;
            z-index: 2;
        }
        #{$self}__sidebar {
            top: v-bind(headerHeight);
            &-container {
                top: v-bind(headerHeight);
            }
        }

    }

    &--sticky-sub-header {
        #{$self}__sub-header {
            position: sticky;
            top: 0;
            z-index: 2;
        }
        #{$self}__sidebar {
            top: v-bind(subHeaderHeight);
            &-container {
                top: v-bind(subHeaderHeight);
            }
        }
    }

    &--sticky-header-and-sub-header {
        #{$self}__header {
            position: sticky;
            top: 0;
        }
        #{$self}__sub-header {
            position: sticky;
            top: v-bind(headerHeight);
        }
        #{$self}__sidebar {
            top: calc(v-bind(subHeaderHeight) + v-bind(headerHeight));
            &-container {
                top: calc(v-bind(subHeaderHeight) + v-bind(headerHeight));
            }
        }
    }
}
</style>
