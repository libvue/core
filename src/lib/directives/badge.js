import '../scss/directives/v-badge.scss';

const handler = (el, binding) => {
    // Check if lv-badge already exists inside el
    const foundBadge = el.querySelector(':scope > .lv-badge');
    if (foundBadge) {
        // Delete any existing badges!
        el.removeChild(foundBadge);
    }
    // Check if parent position is static (we dont want that!)
    if (window.getComputedStyle(el).position === 'static') {
        el.style.position = 'relative';
    }
    // Create a new NODE
    const badge = document.createElement('div');
    // Add content
    badge.innerText = binding.value;
    // Add Class (just for understanding)
    badge.classList.add('v-badge');
    // Add it to the element
    el.appendChild(badge);
};

const badge = {
    mounted: (el, binding) => {
        handler(el, binding);
    },
    updated: (el, binding) => {
        if (binding.value !== binding.oldValue) {
            handler(el, binding);
        }
    },
};

export default badge;
