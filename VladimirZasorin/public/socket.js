window.addEventListener('load', () => {
    let socket = io('http://localhost:3000');

    if (window.location.search.length < 3) {
        socket.emit('newroom', (wls) => {
            window.location.href = wls;
        });
    }

    const message = document.querySelector('#mes');
    const mesForm = document.querySelector('.messform');
    const status = document.querySelector('#status');
    const userlist = document.querySelector('.userlist');
    const loginForm = document.querySelector('.enter');
    const name = document.querySelector('#name');
    const chatroom = document.querySelector('.chatroom');

    socket.on('get message', (data) => {
        let divname;
        let name;
        if (socket.id === data.id) {
            divname = 'message myMes';
            name = 'Me';
        } else {
            divname = 'message otherMes';
            name = data.username;
        }
        // здесь надо будет вставить данные в шаблон (divname, name, data.time, data.message)
        contain.scrollIntoView();
    });
    socket.on('user list', (users) => {
        userlist.innerHTML = '';
        users.map((elem) => {
            // здесь надо будет вставить элемет списка пользователей и передать ему (elem)
            userlist.appendChild(li);
        });
    });
    socket.on('disconnect', () => {
        loginForm.style.display = 'flex';
        chatroom.style.display = 'none';
    });

    mesForm.addEventListener('submit', (e) => {
        newMessege(e);
        return false;
    });
    message.addEventListener('keydown', (e) => {
        if (e.keyCode === 13 && e.ctrlKey) {
            newMessege(e);
        }
        return false;
    });
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = name.value;
        name.value = '';
        if (username !== '') {
            socket.emit('join', {
                namespace: window.location.search,
                username
            });
            loginForm.style.display = 'none';
            chatroom.style.display = 'flex';
        }
        return false;
    });

    function newMessege(e) {
        e.preventDefault();
        if (message.value == '') return;
        socket.emit('new message', message.value);
        message.value = '';
    }
});
