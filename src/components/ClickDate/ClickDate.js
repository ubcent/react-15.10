export class ClickButton{
	constructor(t) {        
            this.t=t;
			this.t.onclick=function () {
			const dateNow = new Date();
			let day = ( dateNow.getDate() < 9 ? '0' + dateNow.getDate() : dateNow.getDate() );
			let month = ( dateNow.getMonth() + 1 < 9 ? '0' + dateNow.getMonth() + 1 : dateNow.getMonth() + 1 );
			let year = dateNow.getFullYear();
			alert( day + '.' + month + '.' + year );
			return true;
			}
    }
}

