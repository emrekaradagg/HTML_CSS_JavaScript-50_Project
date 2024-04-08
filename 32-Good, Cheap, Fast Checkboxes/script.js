const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickDone) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickDone) {
            fast.checked = false
        }

        if(cheap === theClickDone) {
            good.checked = false
        }

        if(fast === theClickDone) {
            cheap.checked = false
        }
    }
}
