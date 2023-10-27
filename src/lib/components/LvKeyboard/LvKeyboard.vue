<template>
    <kbd class="lv-keyboard">
        <span v-if="meta" v-space-after="0.25">{{ layoutMap[layout].meta }} +</span>
        <span v-if="ctrl" v-space-after="0.25">{{ layoutMap[layout].ctrl }} +</span>
        <span v-if="alt" v-space-after="0.25">{{ layoutMap[layout].alt }} +</span>
        <span v-if="shift" v-space-after="0.25">{{ layoutMap[layout].shift }} +</span>
        <slot />
    </kbd>
</template>

<script>
export default {
    props: {
        layout: {
            type: String,
            default: 'mac',
            validator: (val) =>  ['mac', 'windows', 'linux'].includes(val),
        },
        meta: {
            type: Boolean,
            default: false,
        },
        shift: {
            type: Boolean,
            default: false,
        },
        alt: {
            type: Boolean,
            default: false,
        },
        ctrl: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            layoutMap: {
                mac: {
                    meta: '⌘',
                    ctrl: '⌃',
                    alt: '⌥',
                    shift: '⇧',
                },
                windows: {
                    meta: 'WIN',
                    ctrl: 'CTRL',
                    alt: 'ALT',
                    shift: 'SHIFT',
                },
                linux: {
                    meta: 'SUPER',
                    ctrl: 'CTRL',
                    alt: 'ALT',
                    shift: 'SHIFT',
                }
            }
        }
    }
};
</script>

<style lang="scss">
.lv-keyboard {
    display: inline-flex;
    margin: 0 0.25rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: transparent;
    padding: 0.25rem 0.5rem;
    font-weight: 500;
    font-size: var(--font-size-small);
    font-family: var(--font-family);
    text-align: center;
}
</style>
