node{
	stage('SCM'){
		echo "Doing checkout from ${env.BRANCH_NAME}"
		checkout scm
	}
	stage('Build'){
		sh 'npm install'
		if("dev".equals(env.BRANCH_NAME)){
			sh "npm build test"
		}
		else if("master".equal(env.BRANCH_NAME)){
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
