// Get the target elements
const targets = document.querySelectorAll(".target")

// Create a ResizeObserver instance with the 'content-box' option
const resizeObserver = new ResizeObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { width, height } = entry.contentRect
      entry.target.textContent = `Resize me! height ${height.toFixed(
        0
      )}px width ${width.toFixed(0)}px`
    })
  },
  { box: "content-box" }
)

// Observe the target elements
targets.forEach((target) => {
  // Set the initial text content to "progressing..."
  target.textContent = "progressing..."
  resizeObserver.observe(target)
})
