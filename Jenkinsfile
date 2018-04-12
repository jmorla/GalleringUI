node{
	stage('SCM'){
		checkout scm
	}
	stage('Build'){
		sh 'npm install'
		echo "${env.BRANCH_NAME}"
		if(env.BRANCH_NAME == "master")
		{
			sh 'ng build prod'
		}
		else if(env.BRANCH_NAME=="dev")
		{
			sh 'ng build dev'
		}
	}
	stage('Test'){
		echo "TODO: test"
	}
	stage('Deploy'){
		echo "TODO: deploy"
	}
}
