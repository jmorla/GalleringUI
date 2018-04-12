node{
	stage('SCM'){
		checkout scm
	}
	stage('Build'){
		sh 'npm install'
		echo "${env.BRANCH_NAME}"
		if(env.BRANCH_NAME.startWith("master")){
			sh 'npm build prod'
		}
	}
	stage('Test'){
		echo "TODO: test"
	}
	stage('Deploy'){
		echo "TODO: deploy"
	}
}
