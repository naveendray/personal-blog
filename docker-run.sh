docker build -t naveendra/react-blog:latest .

# Get a list of all running container IDs
CONTAINER_IDS=$(docker ps -q)

# Loop through the list and stop each container
# for CONTAINER_ID in $CONTAINER_IDS; do
#     docker stop $CONTAINER_ID
#     docker rm $CONTAINER_ID
# done

docker push naveendra/react-blog:v2
# docker run -d -p 80:80 naveendra/react-blog:latest

URL="http://localhost:80"

# Check the operating system and use the appropriate command
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open $URL
elif [[ "$OSTYPE" == "darwin"* ]]; then
    open $URL
else
    echo "Unsupported operating system"
fi