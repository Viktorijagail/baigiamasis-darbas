let self = this;
    $('.et-hero-tab').each(function() {
        let id = $(this).attr('href');
        let section = $(id);
        if (section.length) {
            let offsetTop = section.offset().top - self.tabContainerHeight;
            let offsetBottom = section.offset().top + section.height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        }
    });
    if (this.currentId !== newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
    }
}
setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
        width = this.currentTab.css('width');

