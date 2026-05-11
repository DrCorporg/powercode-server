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
                withCredentials([file(credentialsId: 'powercode-backend.env', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE .env'
                    sh 'docker build -t ghcr.io/drcorporg/powercode-backend:$BUILD_NUMBER .'
                }
            }
        }
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github', usernameVariable: 'USERNAME', passwordVariable: 'TOKEN')]) {
                    sh '''
                        echo $TOKEN | docker login ghcr.io -u $USERNAME --password-stdin
                        docker push ghcr.io/drcorporg/powercode-backend:${BUILD_NUMBER}
                    '''
                }
            }
        }
    }
    post {
        failure {
                script {
                int maxLines = 100
                def logLines = currentBuild.rawBuild.getLog(maxLines)
                def logSnippet = logLines.join("\n")

                slackSend(
                    channel: '#tech-project-powercode',
                    message: """
                    ❌ *Build Failed*
                    Job: ${env.JOB_NAME}
                    Build: #${env.BUILD_NUMBER}
                    
                    📌 Last ${maxLines} lines:
                    ${logSnippet}
                    🔗 Full logs: ${env.BUILD_URL}console
                    """
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
