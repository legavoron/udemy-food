window.addEventListener('DOMContentLoaded', () => {

    //----------------------------------------------------------------Tabs-------------------------------------------------------

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(i => {
            i.classList.add('hide');
            i.classList.remove('show', 'fade');
        });

        tabs.forEach(i => {
            i.classList.remove('tabheader__item_active');
        });
    }

    function showTabConted(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabConted();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabContent();
                    showTabConted(i);
                }
            });
        }
    });
    
    // -------------------------------------------------------------------Timer--------------------------------------------------------












});