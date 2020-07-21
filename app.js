new Vue({el : "#div", 
	data() {
		return { questions: [ { questionNumber : 1, textOfQuestion : '', answers : [{textOfAnswer : '', checked : ''}, {textOfAnswer : '', checked : ''}] },
			      			  { questionNumber: 2, textOfQuestion : '', answers : [{textOfAnswer : '', checked : ''}, {textOfAnswer : '', checked : ''}] } 
			                ],
			     totalNumberOfQuestion : 2, 
			     numberOfDesiredQuestion : 0
			   }
	},
	methods: {
		checkReponse : function(event){
			let res = event.target.name;
			if(this.questions[Number(res[1])+1].answers[Number(res[2])].checked === ''){
				this.questions[Number(res[1])+1].answers[Number(res[2])].checked = 'checked';
			} else{
				this.questions[Number(res[1])+1].answers[Number(res[2])].checked = '';
			}
		},
		addQuestion: function (event) {
		  this.totalNumberOfQuestion = Number(this.totalNumberOfQuestion)+1;
		  
		  this.questions.push({ questionNumber: this.totalNumberOfQuestion, textOfQuestion : '', answers : [{textOfAnswer : '', checked : ''}, {textOfAnswer : '', checked : ''}] });
		  
		},
		removeQuestion: function (event) {
		  const question = Number(event.target.name)-1;
		  Vue.delete(this.questions, question);
		  //refreshing questions
		  let indexQuestion = 1;
		  for(let i=0; i < this.questions.length; i++) {
		  	this.questions[i].questionNumber = indexQuestion;
		  	indexQuestion += 1;
		  }
		  this.totalNumberOfQuestion = this.questions.length;
		  
		},
		addReponse: function (event) {
			const question = Number(event.target.name)-1;
			this.questions[question].answers.push({textOfAnswer : ''}); 
		},
		removeReponse: function (event) {
			const question = Number(event.target.name)-1;
			this.questions[question].answers.pop();
		},
		addMultipleQuestions : function(event) {
			if(this.numberOfDesiredQuestion > 0){
				const nombre = Number(this.numberOfDesiredQuestion);
				for(let i=1; i <= nombre; i++){
					this.addQuestion(event);
				}
				this.totalNumberOfQuestion = this.questions.length;
			}
		}
  	}
});