console.log("Duden Extension loaded")

// clicks the dsgvo popup on page load
if(document.querySelector(".message-safe-area-holder button")){
	document.querySelector(".message-safe-area-holder button").click()
}

let querySelectorStrings = [
	'div[id*="ad"]',
	".tile__wrapper",
	"div[data-google-query-id]",
	".aab-overlay"
]


let interval = window.setInterval(removeElements, 1000)

let maxIntervals = 10
let intervalCount = 0

removeElements()

function removeElements(){
	console.log("[Duden Extensions] Starting removing Ad elements")
	let keepInterval = false
	// removes all ad containers
	querySelectorStrings.forEach(queryString => {
		let l = document.querySelectorAll(queryString).length
		if(l > 0){
			keepInterval = true
			document.querySelectorAll(queryString).forEach(elm => {
				elm.innerHTML = ""
				elm.removeAttribute('style');
				elm.removeAttribute('id');
				elm.removeAttribute('class');
			})
			console.log("[Duden Extensions] Removed: " + l + " html elements")
		}
	})
	intervalCount ++
	
	document.body.style.overflow = null

	if(!keepInterval || intervalCount >= maxIntervals){
		clearInterval(interval)
		console.log("[Duden Extensions] Remove interval stopped")
	}
}
