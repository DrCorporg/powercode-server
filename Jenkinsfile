pipeline {
    agent any
    stages {
        stage('Waiting'){
            steps{
                // Wait 20 sec, if new commit comes
                echo "Waiting 20 seconds before next step..."
                sleep 20
            }
        }
        stage('Checkout') {
            steps {
                git branch: 'main',credentialsId: 'github', url: 'https://github.com/DrCorporg/powercode-server.git'
            }
        }
        stage('Build') {
            steps {
                withCredentials([file(credentialsId: 'powercode-server.env', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE .env'
                    sh 'docker build -t ghcr.io/drcorporg/powercode-server:$BUILD_NUMBER .'
                }
            }
        }
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github', usernameVariable: 'USERNAME', passwordVariable: 'TOKEN')]) {
                    sh '''
                        echo $TOKEN | docker login ghcr.io -u $USERNAME --password-stdin
                        docker push ghcr.io/drcorporg/powercode-server:${BUILD_NUMBER}
                    '''
                }
            }
        }
    }
    post {
        failure {
            script {
                def logUrl = "${env.BUILD_URL}consoleText"
                slackSend(
                    channel: '#tech-project-thimar',
                    message: "❌ *Build Failed*\nJob: ${env.JOB_NAME}\nBuild: #${env.BUILD_NUMBER}\n🔗 Full logs: ${env.BUILD_URL}console"
                )
            }
        }
        
        success {
            slackSend(
                message: "✅ Build SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                channel: "#tech-project-powercode"
            )

        }
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}
