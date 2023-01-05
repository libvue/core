<template>
    <dl class="lv-description-list" :class="classObject">
        <div v-for="(item, index) in items" :key="index" class="lv-description-list__row">
            <dt class="lv-description-list__term">{{ item.term }}</dt>
            <dd class="lv-description-list__description">
                <slot
                    :name="item.id ? item.id : item.term.toLowerCase()"
                    :description="item.description"
                    :item="item"
                    :term="item.term"
                >
                    {{ item.description }}
                </slot>
            </dd>
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
            validator: (val) => ['right', 'left'].includes(val),
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-description-list--terms-text-align-${this.termsTextAlign}`]: this.termsTextAlign,
            };
        },
    },
};
</script>

<style lang="scss">
.lv-description-list {
    $self: &;
    display: table;
    margin: 0;
    border: none;
    padding: 0;
    width: 100%;

    &__row {
        display: table-row;
    }
    &__term {
        display: table-cell;
        padding: 0.5rem;
        font-weight: bold;
        text-align: right;
        width: 0;
        white-space: nowrap;
        vertical-align: top;
    }
    &__description {
        display: table-cell;
        padding: 0.5rem;
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
