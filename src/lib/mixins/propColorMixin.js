export default function propColorMixin(defaultColor = 'default') {
    return {
        props: {
            color: {
                type: String,
                default: defaultColor,
                validator: (value) =>
                    [
                        // Solid
                        'solid-default',
                        'solid-primary',
                        'solid-secondary',
                        'solid-warning',
                        'solid-info',
                        'solid-danger',
                        'solid-success',
                        // Solid Dimmed
                        'solid-dimmed-default',
                        'solid-dimmed-primary',
                        'solid-dimmed-secondary',
                        'solid-dimmed-warning',
                        'solid-dimmed-info',
                        'solid-dimmed-danger',
                        'solid-dimmed-success',
                        // Outline
                        'outline-default',
                        'outline-primary',
                        'outline-secondary',
                        'outline-warning',
                        'outline-info',
                        'outline-danger',
                        'outline-success',
                        // Outline Dimmed
                        'outline-dimmed-default',
                        'outline-dimmed-primary',
                        'outline-dimmed-secondary',
                        'outline-dimmed-warning',
                        'outline-dimmed-info',
                        'outline-dimmed-danger',
                        'outline-dimmed-success',
                        // Ghost
                        'ghost-default',
                        'ghost-primary',
                        'ghost-secondary',
                        'ghost-warning',
                        'ghost-info',
                        'ghost-danger',
                        'ghost-success',
                    ].includes(value),
            },
        },
    };
}
