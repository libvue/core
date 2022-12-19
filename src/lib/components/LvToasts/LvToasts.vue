<template>
    <Teleport to="body">
        <transition-group name="toasts" tag="div" class="lv-toasts">
            <lv-toast
                v-for="toast in toasts"
                :key="toast.uid"
                :description="toast.description"
                :title="toast.title"
                :button="toast.button"
                :button-color="toast.buttonColor"
                :icon="toast.icon"
                :icon-color="toast.iconColor"
                @click="onClickToast(toast)"
                @click-button="onClickButton(toast)"
            >
            </lv-toast>
        </transition-group>
    </Teleport>
</template>

<script>
import LvToast from '../LvToast/LvToast.vue';

export default {
    components: {
        LvToast,
    },
    props: {
        decay: {
            type: Number,
            default: 3000,
        },
        max: {
            type: Number,
            default: 5,
        },
        eventBus: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            toasts: {},
            latestUid: 0,
        };
    },
    watch: {
        toasts: {
            handler(val) {
                // Check if max is exceeded then remove the oldest
                if (Object.entries(val).length > this.max) {
                    // Determine the oldest by looking at the lowest key value
                    const oldestUid = Math.min.apply(
                        Math,
                        Object.keys(val).map((i) => Number.parseInt(i, 10))
                    );
                    delete this.toasts[oldestUid];
                }
            },
            immediate: true,
            deep: true,
        },
    },
    mounted() {
        this.eventBus.$on('toast', this.addToastHandler);
    },
    unmounted() {
        this.eventBus.$off('toast', this.addToastHandler);
    },
    methods: {
        addToastHandler(properties) {
            // Convert latestUid to a number without any reference
            const latestUid = Number.parseInt(this.latestUid.toString(), 10);
            this.toasts[latestUid] = {
                ...properties,
                uid: latestUid,
            };
            setTimeout(() => {
                delete this.toasts[latestUid];
            }, this.decay);
            this.latestUid += 1;
        },
        onClickToast(toast) {
            if (toast.onClick && typeof toast.onClick === 'function') {
                // Run the callback with additional parameters
                toast.onClick({ close: () => this.deleteToast(toast), toast });
            }
        },
        onClickButton(toast) {
            if (toast.onClickButton && typeof toast.onClickButton === 'function') {
                // Run the callback with additional parameters
                toast.onClickButton({ close: () => this.deleteToast(toast), toast });
            }
        },
        deleteToast(toast) {
            delete this.toasts[toast.uid];
        },
    },
};
</script>

<style lang="scss">
.lv-toasts {
    display: flex;
    position: fixed;
    right: 0;
    bottom: 0;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    z-index: 2101;
    padding: 2rem;
}
.toasts-enter-active,
.toasts-leave-active {
    transition: all 0.2s;
}
.toasts-enter-from,
.toasts-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>
