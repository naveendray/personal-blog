minikube stop
minikube delete
minikube start
./apply-all.sh
./counter.sh 45
./view-resource.sh
./counter.sh 75
./expose-services.sh
open -na "Google Chrome" --args --incognito "http://localhost:8082"
# minikube dashboard
