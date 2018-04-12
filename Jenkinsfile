node{
	dev branch="master"

	stage('SCM'){
		checkout scm
		branch=env.BRANCH_NAME
		echo "checking out from branch ${env.BRANCH_NAME}"
	}
	stage('Build'){
		sh 'npm install'
		//if('dev' == branch){
		//	sh "npm build test"
		//}
		//else if('master' == branch){
		//	sh "npm build prod"
		//}
	}
	stage('Test'){
		echo "TODO: test"
	}
	stage('Deploy'){
		echo "TODO: deploy"
	}
}
