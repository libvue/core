import URLValidator from '../utils/URLValidator';

const navigationMixin = {
    props: {
        /**
         * Can be empty, string, or router-object
         */
        to: {
            type: [String, Object],
            default: '',
        },
        target: {
            type: String,
            default: '_self',
            validator(val) {
                return ['_blank', '_self'].includes(val);
            },
        },
    },
    computed: {
        /**
         * toEqualsCurrentRoute
         * @description can be used to set class names
         * @returns {boolean}
         */
        toEqualsCurrentRoute() {
            // Check first if a object is given
            if (this.to && this.to.constructor.name === 'Object') {
                if (this.to.name && this.$route.name === this.to.name) {
                    return true;
                }
                if (this.to.path && this.$route.path === this.to.path) {
                    return true;
                }
            } else if (this.to && !URLValidator(this.to)) {
                const resolved = this.$router.resolve({ path: this.to });
                if (resolved.name === this.$route.name) {
                    return true;
                }
            }
            return false;
        },
        /**
         * href
         * must be set to <a :href="href">
         * @returns {String|Object|string|boolean}
         */
        href() {
            if (this.to) {
                if (URLValidator(this.to)) {
                    return this.to;
                }
                const resolve = this.$router.resolve(this.to);
                return resolve.href;
            }
            return null; // Returning false to prevent a :href attr to be set
        },
        isExternalLink() {
            return this.to ? URLValidator(this.to) : false;
        },
    },
    methods: {
        /**
         * onClick
         * @description must be set on <a @click="onClick">
         * @param event
         */
        onClick(event) {
            const cmdOrCtrl = event.metaKey || event.ctrlKey;
            const target = cmdOrCtrl ? '_blank' : this.target;
            // Check if there is no valid URL thus no HREF
            // then it is probably trying to contact an internal route.
            if (this.to && !this.isExternalLink) {
                if (this.target === '_blank' || this.toEqualsCurrentRoute || cmdOrCtrl) {
                    const resolved = this.$router.resolve(this.to);
                    window.open(resolved.href, target);
                } else {
                    this.$router.push(this.to);
                }
            } else if (this.to) {
                window.open(this.to, target);
            }
            this.$emit('click');
        },
    },
};

export default navigationMixin;
