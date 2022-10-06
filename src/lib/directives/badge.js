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
    badge.classList.add('lv-badge');
    // Add styling
    badge.style.position = 'absolute';
    badge.style.backgroundColor = 'red';
    badge.style.color = 'white';
    badge.style.top = '-0.625rem';
    badge.style.right = '0';
    badge.style.transform = 'translateX(50%)';
    badge.style.fontSize = '0.625rem';
    badge.style.padding = '0.25rem 0.5rem';
    badge.style.borderRadius = '0.625rem';
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
