const template = `
<template>
    <div class="%name%">
        Hello World
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.%name% {}
</style>
`.trim();

module.exports = template;
