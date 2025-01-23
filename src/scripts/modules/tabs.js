function tabs() {
    const tabsList = document.querySelectorAll('.gifts__item');
    const tabsItem = document.querySelectorAll('.gifts__card');
    // const tabsListParent = document.querySelector('.gifts__list');

    tabsList.forEach(item => {
        item.addEventListener('click', (e) => {
            const tabsListTarget = e.target.getAttribute('data-tab');
            tabsList.forEach(item => item.classList.remove('active'));
            tabsItem.forEach(item => item.classList.add('hide'));

            item.classList.add('active');

            tabsItem.forEach(item => {
                if (item.getAttribute('data-type') === tabsListTarget) {
                    item.classList.remove('hide');
                }
                if (tabsListTarget === 'All') {
                    item.classList.remove('hide');
                }
            })
        })
    })
}
export default tabs;