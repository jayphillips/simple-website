'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

//TODO: Add Hello Code
    function getMessage(name) {
        return 'Hello, ' + name + '...';
    }
    const message = getMessage('Jay');
    document.write(message);

//TODO: Add setTimeout code
    setTimeout(
        function () { document.write('...Hello again!'); },
        2000
    );

