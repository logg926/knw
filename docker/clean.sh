
SCRIPT="docker exec -i -t  $(docker ps -aqf "ancestor=atmoz/sftp:latest") /bin/bash; rm -f ~/../home/autogen/upload/*"
# ;docker stack deploy -c docker-compose.yml autogen"
SCR=${SCRIPT}
ssh -l root 220.241.121.87 "${SCR}"
bash update.sh