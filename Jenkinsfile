node{
	dev branch=env.BRANCH_NAME //representation of the current branch

	stage('SCM'){
		echo "Doing checkout from ${env.BRANCH_NAME}"
		checkout scm
	}
	stage('Build'){
		sh 'npm install'
		if("dev"==branch){
			sh "npm build test"
		}
		else if("master"==branch){
			sh "npm build prod"
		}
	}
	stage('Test'){
		echo "TODO: test"
	}
	stage('Deploy'){
		echo "TODO: deploy"
	}
}
