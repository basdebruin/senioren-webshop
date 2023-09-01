/**
 * Dispatch event on click outside of node
 * @param {CustomEventInit<any> | undefined} node
 */
export function clickOutside(node) {
  
    const handleClick = (/** @type {{ target: any; defaultPrevented: any; }} */ event) => {
        if (!event) return;
        // @ts-ignore
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
			// @ts-ignore
			node.dispatchEvent(
				new CustomEvent('click_outside', node)
			)
        }
    }

    document.addEventListener('click', handleClick, true);
    
    return {
        destroy() {
        	document.removeEventListener('click', handleClick, true);
        }
	}
}