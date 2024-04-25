browser.storage.local.get('settings').then(result => {
    const settings = result.settings || {hide_blue: true};
    const blueSwitch = document.getElementById('blueCheckmarksSwitch');
    blueSwitch.checked = settings.hide_blue;
});

document.getElementById('blueCheckmarksSwitch').addEventListener('click', e => {
    const blueSwitch = document.getElementById('blueCheckmarksSwitch');
    const newValue = blueSwitch.checked

    browser.storage.local.get('settings').then(result => {
        const settings = result.settings || {};
        settings.hide_blue = newValue;
        browser.storage.local.set({settings});
    });
});