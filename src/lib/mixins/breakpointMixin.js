const breakpointMixin = {
    data() {
        return {
            cssBreakpoints: this.getCssBreakpoints(),
            breakpoints: {
                current: null,
                greaterOrEqual: {
                    xs: null,
                    sm: null,
                    md: null,
                    lg: null,
                    xl: null,
                    xxl: null,
                },
                smallerOrEqual: {
                    xs: null,
                    sm: null,
                    md: null,
                    lg: null,
                    xl: null,
                    xxl: null,
                },
            },
        };
    },
    mounted() {
        window.addEventListener('resize', this.updateScreen);
        this.updateScreen();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateScreen);
    },
    methods: {
        getCssBreakpoints() {
            return {
                xs: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xs'), 10) || 0,
                sm: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm'), 10) || 0,
                md: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-md'), 10) || 0,
                lg: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg'), 10) || 0,
                xl: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xl'), 10) || 0,
                xxl: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xxl'), 10) || 0,
            };
        },
        getBreakpointData() {
            const width = window.innerWidth;
            const breakPointData = {
                current: null,
                greaterOrEqual: {
                    xs: width >= this.cssBreakpoints.xs,
                    sm: width >= this.cssBreakpoints.sm,
                    md: width >= this.cssBreakpoints.md,
                    lg: width >= this.cssBreakpoints.lg,
                    xl: width >= this.cssBreakpoints.xl,
                    xxl: width >= this.cssBreakpoints.xxl,
                },
                smallerOrEqual: {
                    xs: width < this.cssBreakpoints.sm,
                    sm: width < this.cssBreakpoints.md,
                    md: width < this.cssBreakpoints.lg,
                    lg: width < this.cssBreakpoints.xl,
                    xl: width < this.cssBreakpoints.xxl,
                    xxl: width < Infinity,
                },
            };

            if (width >= this.cssBreakpoints.xs && width < this.cssBreakpoints.sm) {
                breakPointData.current = 'xs';
            } else if (width >= this.cssBreakpoints.sm && width < this.cssBreakpoints.md) {
                breakPointData.current = 'sm';
            } else if (width >= this.cssBreakpoints.md && width < this.cssBreakpoints.lg) {
                breakPointData.current = 'md';
            } else if (width >= this.cssBreakpoints.lg && width < this.cssBreakpoints.xl) {
                breakPointData.current = 'lg';
            } else if (width >= this.cssBreakpoints.xl && width < this.cssBreakpoints.xxl) {
                breakPointData.current = 'xl';
            } else if (width >= this.cssBreakpoints.xxl) {
                breakPointData.current = 'xxl';
            }
            return breakPointData;
        },
        updateScreen() {
            this.breakpoints = this.getBreakpointData();
        },
    },
};

export default breakpointMixin;
