pkill -f "kubectl port-forward"
kubectl port-forward service/json-service 8000:8000 &
kubectl port-forward service/react-service 8082:80 &