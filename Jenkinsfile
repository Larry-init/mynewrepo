pipeline {
    
    agent any

    stages {
        stage('Initial_cleanup'){
            steps {

                dir ("${WORKSPACE}"){
                    deleteDir()
                }
                
            }
        }
        stage('checkout'){
            steps {

                script {
                    sh "git clone https://github.com/Larry-init/mynewrepo.git"
                }
                
            }
        }
        stage("Build"){
            steps {
                script{
                    
                    sh "cd mynewrepo && npm install"
                   
                    
                }
            }
        }
        stage("Build image"){
            steps{
                script{
                    sh "cd react_project_totorial && docker build -t mlarry/larryreactapp ."
                    
                }
            }

        }
        stage("Push image"){
            steps{
                script{
                    sh "docker login -u ${env.user} -p ${env.passwd}"
                    sh "docker push mlarry/larryreactapp"
                }
            }

        }
         stage("Docker logout"){
            steps{
                script{
                    sh "docker logout"
                }
            }

        }

    }
}