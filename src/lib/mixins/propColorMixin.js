export default function propColorMixin(defaultColor = 'default') {
    return {
        props: {
            color: {
                type: String,
                default: defaultColor,
                validator: (value) =>
                    [
                        'solid-default',
                        'solid-primary',
                        'solid-secondary',
                        'solid-warning',
                        'solid-info',
                        'solid-danger',
                        'solid-success',
                        'solid-dimmed-default',
                        'solid-dimmed-primary',
                        'solid-dimmed-secondary',
                        'solid-dimmed-warning',
                        'solid-dimmed-info',
                        'solid-dimmed-danger',
                        'solid-dimmed-success',
                        'outline-default',
                        'outline-primary',
                        'outline-secondary',
                        'outline-warning',
                        'outline-info',
                        'outline-danger',
                        'outline-success',
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
