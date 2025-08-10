pipeline{
    agent any

    environment{
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
        IMAGE_NAME = "sanchit021/demo-app"

    }
    stages{
        stage('Checkout'){
            steps{
                git branch: 'master', url: 'https://github.com/sanchit940/docker-jenkins-demo.git'


            }
        }
        stage('Build Image'){
            steps{
                sh 'docker build -t $IMAGE_NAME:${BUILD_NUMBER} .'
            }
        }
        stage('Push Image'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                sh 'docker push $IMAGE_NAME:${BUILD_NUMBER}'
            }

        }
        stage('Deploy'){
            steps{
                sh 'docker stop demo || true && docker rm demo || true'
                sh 'docker run -d --name demo -p 3000:3000 $IMAGE_NAME:${BUILD_NUMBER}'
            }
        }
    }
}