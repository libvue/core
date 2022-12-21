<template>
    <dl class="lv-description-list" :class="classObject">
        <div v-for="(item, index) in items" :key="index" class="lv-description-list__row">
            <dt class="lv-description-list__term">{{ item.term }}</dt>
            <dd class="lv-description-list__description">{{ item.description }}</dd>
        </div>
    </dl>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        termsTextAlign: {
            type: String,
            default: 'left',
            validator: (val) => ['right', 'left'].includes(val)
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-description-list--terms-text-align-${this.termsTextAlign}`]: this.termsTextAlign,
            }
        }
    }
};
</script>

<style lang="scss">
.lv-description-list {
    $self: &;
    margin: 0;
    padding: 0;
    border: none;
    display: table;

    &__row {
        display: table-row;
    }
    &__term {
        display: table-cell;
        font-weight: bold;
        text-align: right;
        padding: .5rem;
    }
    &__description {
        display: table-cell;
        padding: .5rem;
    }

    &--terms-text-align-right {
        #{$self}__term {
            text-align: right;
        }
    }
    &--terms-text-align-left {
        #{$self}__term {
            text-align: left;
        }
    }
}
</style>
