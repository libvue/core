<template>
    <code class="lv-code">
        <slot></slot>
    </code>
</template>

<style lang="scss">
.lv-code {
    border-radius: var(--border-radius);
    padding: .2rem .4rem;
    background-color: var(--code-background-color);
    color: var(--code-text-color);
}
</style>
