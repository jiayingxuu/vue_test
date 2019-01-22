(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var vm = new Vue({
		el:'#app',
		data:{
			id:"",
			name:'',
			list:[]
		},
		methods:{
			add(){
				// console.log({id:this.list.length+1,name:this.name,checked:false});	
				this.list.push({id:this.list.length+1,name:this.name,checked:false})
				this.name = ''
	
			},
			check(id){
				// console.log(this.list)
				return this.list.forEach(item => {
					if(item.id == id){
						item.checked = !item.checked
					}
				})
			},
			del(id){
				var index = this.list.findIndex(item => {
					if(item.id==id){
						return true
					}
				})
				this.list.splice(index,1)
			}
		}
	})
})(window);

