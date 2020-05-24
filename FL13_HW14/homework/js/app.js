class Student {
	constructor(name, email) {
		let _name = name;
		this.getName = () => _name;

		let _email = email;
		this.getEmail = () => _email;

		const homeworkResults = [];
		this.getHomeworkResults = () => homeworkResults;
	}

	addHomeworkResult(topic, success) {
		this.getHomeworkResults().push({ topic, success });
	}
	getNumPassed() {
		return this.homeworkResults.passed;
	}

	getNumFailed() {
		return this.homeworkResults.length - this.homeworkResults.passed;
	}


}



const descHidden = {
	enumerable: false,
	configurable: true,
	writable: true
};

class FrontendLab {
	constructor(students) {
		this.studentsList = students;
		const result = [];
		this.getResult = () => result;
	}

	printStudentsList() {
		for (const student of this.studentsList.values()) {
			console.log(student.getName());
			console.log([...student.results()]);
		}
	}


}

