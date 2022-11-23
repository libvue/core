<template>
    <Teleport to="body">
        <div v-if="modal" class="lv-cookie-consent__backdrop"></div>
        <div class="lv-cookie-consent" role="dialog" :aria-modal="!!modal">
            <slot>
                <lv-heading v-space-after=".5" :level="5">{{ title }}</lv-heading>
                <lv-paragraph v-space-after="1">
                    {{ description }}
                </lv-paragraph>
                <lv-flex>
                    <lv-button :label="acceptButtonText" color="solid-primary" @click="onClickAccept"/>
                    <lv-button :label="declineButtonText" color="solid-dimmed-primary" @click="onClickDecline"/>
                    <lv-button :label="moreButtonText" color="ghost-default" @click="onClickMore"/>
                </lv-flex>
            </slot>
        </div>
    </Teleport>
</template>

<script>
export default {
    props: {
        modal: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'This websites uses cookies',
        },
        description: {
            type: String,
            default: 'This website uses cookies to work properly.'
        },
        acceptButtonText: {
            type: String,
            default: 'I Accept'
        },
        declineButtonText: {
            type: String,
            default: 'I Decline'
        },
        moreButtonText: {
            type: String,
            default: 'Learn more'
        }
    },
    emits: ['accept', 'decline', 'more'],
    methods: {
        onClickAccept() {
            this.$emit('accept')
        },
        onClickDecline() {
            this.$emit('decline')
        },
        onClickMore() {
            this.$emit('more')
        },
    }
};
</script>

<style lang="scss">
.lv-cookie-consent {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: var(--z-index-dialog);
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    padding: calc(var(--padding) * 2);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    &__backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
        position: fixed;
        z-index: var(--z-index-dialog);
        top: 0;
        left: 0;
    }
}
</style>
