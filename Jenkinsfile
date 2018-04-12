node{
	stage('SCM'){
		checkout scm
	}
	stage('Build'){
		sh 'npm install'
		sh "${env.BRANCH_NAME}"
	}
	stage('Test'){
		echo "TODO: test"
	}
	stage('Deploy'){
		echo "TODO: deploy"
	}
}
