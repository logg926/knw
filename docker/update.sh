scp docker-compose.yml root@220.241.121.87:~/
SCRIPT="docker stack deploy -c docker-compose.yml autogen"
SCR=${SCRIPT}
ssh -l root 220.241.121.87 "${SCR}"
exit