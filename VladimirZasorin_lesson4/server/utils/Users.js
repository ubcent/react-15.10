class Users {
    /**
     * @param {array} users
     */
    constructor() {
        this.users = [];
    }
    /**
     * Добавляем данные пользователя
     * @param {string} id 
     * @param {string} name 
     * @param {string} room 
     * @returns {object} данные добавленного пользователя
     */
    addUser(id, name, room) {
        var user = {id, name, room};
        this.users.push(user)
        return user;
    }
    /**
     * Удаляем пользователя из массива
     * @param {string} id 
     * @returns {object} данные удалённого пользователя
     */
    removeUser(id) {
        var user = this.getUser(id);
        this.users.splice(this.users.indexOf(id), 1);
        return user;
    }
    /**
     * Получаем данные пользователя по id
     * @param {string} id 
     * @returns {object} данные пользователя по id
     */
    getUser(id) {
        return this.users[this.users.indexOf(id)];
    }
    /**
     * Получаем объекты всех пользователей в виде массива
     * @param {string} room
     * @returns {array} users
     */
    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        return users.map((user) => user.name);
    }
}

module.exports = Users;