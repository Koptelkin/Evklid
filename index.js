document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs-button').forEach(function(tabsButton) {
        tabsButton.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.section-stages-content').forEach(function(sectionStagesContent) {
                sectionStagesContent.classList.remove('section-stages-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-stages-content-active')
        })
    })
})